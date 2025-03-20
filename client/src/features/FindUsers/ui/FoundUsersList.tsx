import { IUser } from '@/entities/UserData'
import { SERVER_URL } from '@/shared/api/http'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import SearchIcon from '@mui/icons-material/Search'
import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { styled, alpha } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import { useEffect, useState } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

import { getSearchUsersState } from '../model/selectors/getSearchUsersState'
import { findUsers } from '../model/services/findUsers'
import { searchUsersActions } from '../model/slice/searchUsersSlice'
import { FoundUsersList as FoundUsersListDeprecated } from './deprecated/FoundUsersList'

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
                        data-testid="search-input"
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
                            zIndex: 10,
                            maxHeight: '400px',
                            overflowY: 'auto',
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
