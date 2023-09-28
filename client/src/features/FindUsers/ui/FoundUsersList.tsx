import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useEffect, useState } from 'react'
import { getSearchUsersState } from '../model/selectors/getSearchUsersState'
import { findUsers } from '../model/services/findUsers'
import { searchUsersActions } from '../model/slice/searchUsersSlice'
import { Input } from 'shared/ui/Input/Input'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { Avatar } from 'entities/Avatar'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import cls from './FoundUsersList.module.scss'
import { IUser } from 'entities/UserData'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'

interface FoundUsersListProps {
    className?: string
}

export const FoundUsersList = ({ className }: FoundUsersListProps) => {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)

    const dispatch = useAppDispatch()
    const { users, firstName, lastName } = useAppSelector(getSearchUsersState)

    useEffect(() => {
        dispatch(findUsers({ firstName, lastName }))
        if (firstName) {
            console.log(firstName, 'first')

            setShowResults(true)
        }
    }, [firstName, lastName])

    useEffect(() => {
        const closeSearch = (e: MouseEvent) => {
            if ((e.target as HTMLElement).id !== 'search') {
                setShowResults(false)
                setSearchValue('')
            }
        }

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
            <Input
                id="search"
                className={cls.search}
                placeholder="Поиск"
                type="search"
                value={searchValue}
                onChange={onChangeSearch}
                autoComplete="off"
            />
            <ContentContainer
                id="search"
                className={classNames(cls.results, { [cls.show]: showResults }, [])}
            >
                {users ? (
                    users.map((user: IUser) => {
                        return (
                            <Link to={`/${user.userId}`}>
                                <div key={user.userId} className={cls.userContainer}>
                                    <Avatar avatarPath={user.avatarPath} className={cls.avatar} />
                                    <div>{user.firstName}</div>
                                    <div>{user.lastName}</div>
                                </div>
                            </Link>
                        )
                    })
                ) : (
                    <div>Пользователей не найдено</div>
                )}
            </ContentContainer>
        </>
    )
}
