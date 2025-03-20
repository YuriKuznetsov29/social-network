import { Avatar } from '@/entities/Avatar'
import { IUser } from '@/entities/UserData'
import SearchIcon from '@/shared/assets/icons/magnifying-glass-bold.svg'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { Input } from '@/shared/ui/Input/Input'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { getSearchUsersState } from '../../model/selectors/getSearchUsersState'
import { findUsers } from '../../model/services/findUsers'
import { searchUsersActions } from '../../model/slice/searchUsersSlice'
import cls from './FoundUsersList.module.scss'

interface FoundUsersListProps {
    className?: string
}

export const FoundUsersList = ({ className }: FoundUsersListProps) => {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)
    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()
    const { users, firstName, lastName } = useAppSelector(getSearchUsersState)

    useEffect(() => {
        dispatch(findUsers({ firstName, lastName }))
        if (firstName) {
            console.log(firstName, 'first')

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

    const onChangeSearch = (value: string) => {
        setSearchValue(value)
    }

    return (
        <>
            <label className={cls.labelSearch} htmlFor="search">
                <div className={cls.iconWrapper}>
                    <SearchIcon className={cls.searchIcon} />
                </div>
                <Input
                    id="search"
                    className={cls.search}
                    placeholder={t('Поиск')}
                    type="search"
                    value={searchValue}
                    onChange={onChangeSearch}
                    autoComplete="off"
                    name="search"
                    readOnly
                    onFocus={(e) => {
                        e.target.readOnly = false
                    }}
                    data-testid="search-input"
                />
            </label>

            <ContentContainer
                id="search"
                className={classNames(cls.results, { [cls.show]: showResults }, [])}
            >
                {users.length ? (
                    users.map((user: IUser) => {
                        return (
                            <Link to={`/${user.userId}`}>
                                <div key={user.userId} className={cls.userContainer}>
                                    <Avatar
                                        avatarPath={user.avatarPath}
                                        className={cls.avatar}
                                        size="L"
                                        isOnline={user.isOnline}
                                        lastSeenOnline={user.lastSeenOnline}
                                    />
                                    <div>{user.firstName}</div>
                                    <div>{user.lastName}</div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <div data-testid="not-found-users">{t('Пользователей не найдено')}</div>
                )}
            </ContentContainer>
        </>
    )
}
