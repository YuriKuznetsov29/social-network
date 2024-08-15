import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useEffect, useState } from 'react'
import { getSearchUsersState } from '../model/selectors/getSearchUsersState'
import { findUsers } from '../model/services/findUsers'
import { searchUsersActions } from '../model/slice/searchUsersSlice'
import { Input } from '@/shared/ui/Input/Input'
import classNames from 'classnames'
import { Link, useNavigate } from 'react-router-dom'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { IUser } from '@/entities/UserData'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { useTranslation } from 'react-i18next'
import cls from './FoundUsersList.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { FoundUsersList as FoundUsersListDeprecated } from './deprecated/FoundUsersList'
import {
    Avatar,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
    Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { styled, alpha } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import React from 'react'
import { useTheme } from '@mui/material/styles'
import { SERVER_URL } from '@/shared/api/http'

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

interface FoundUsersListProps {
    className?: string
}

export const FoundUsersList = ({ className }: FoundUsersListProps) => {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)
    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { users, firstName, lastName } = useAppSelector(getSearchUsersState)

    const theme = useTheme()

    useEffect(() => {
        dispatch(findUsers({ firstName, lastName }))
        if (firstName) {
            setShowResults(true)
        }
    }, [firstName, lastName])

    const closeSearch = (e: MouseEvent) => {
        if ((e.target as HTMLElement).id !== 'search') {
            setShowResults(false)
            setSearchValue('')
        }
    }

    useEffect(() => {
        document.body.addEventListener<'click'>('click', closeSearch)

        return () => {
            document.body.removeEventListener<'click'>('click', closeSearch)
        }
    }, [])

    useEffect(() => {
        const name = searchValue.trim().split(' ')

        dispatch(searchUsersActions.setFirstName(name[0] || ''))
        dispatch(searchUsersActions.setLastName(name[1] || ''))
    }, [searchValue])

    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Search id="search" sx={{ position: 'relative' }}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={(e) => onChangeSearch(e)}
                    />
                    <List
                        sx={{
                            display: showResults ? 'block' : 'none',
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'absolute',
                            // bgcolor: theme.palette.grey,
                        }}
                    >
                        {users.length ? (
                            users.map((user: IUser) => {
                                return (
                                    <>
                                        <ListItem
                                            sx={{
                                                cursor: 'pointer',
                                                // bgcolor: theme.palette.divider,
                                                ':hover': { bgcolor: theme.palette.action.hover },
                                            }}
                                            alignItems="flex-start"
                                            onClick={() => navigate(`/${user.userId}`)}
                                        >
                                            <ListItemAvatar>
                                                <Avatar
                                                    alt={user.firstName}
                                                    src={SERVER_URL + user.avatarPath}
                                                />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={`${user.firstName} ${user.lastName}`}
                                                secondary={
                                                    <React.Fragment>
                                                        {/* <Typography
                                                            sx={{ display: 'inline' }}
                                                            component="span"
                                                            variant="body2"
                                                            color="text.primary"
                                                        >
                                                            {`${user.firstName} ${user.lastName}`}
                                                        </Typography> */}
                                                        {user.city}
                                                    </React.Fragment>
                                                }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </>
                                )
                            })
                        ) : (
                            <div data-testid="not-found-users">{t('Пользователей не найдено')}</div>
                        )}
                    </List>
                </Search>
            }
            off={<FoundUsersListDeprecated />}
        />
    )
}
