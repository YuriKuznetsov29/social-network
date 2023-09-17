import classNames from 'classnames'
import cls from './FoundUsersList.module.scss'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getSearchUsersState } from '../model/selectors/getSearchUsersState'
import { MouseEventHandler, useEffect, useState, MouseEvent } from 'react'
import { findUsers } from '../model/services/findUsers'

interface FoundUsersListProps {
    className?: string
}

export const FoundUsersList = ({ className }: FoundUsersListProps) => {
    const [showResults, setShowResults] = useState(false)

    const dispatch = useAppDispatch()
    const { users, firstName, lastName } = useAppSelector(getSearchUsersState)

    useEffect(() => {
        dispatch(findUsers({ firstName, lastName }))
        setShowResults(true)
    }, [firstName, lastName])

    const onClickClose = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            setShowResults(false)
        }
    }

    return (
        <div
            className={classNames(cls.FoundUsersList, { [cls.show]: showResults }, [className])}
            onClick={(e: MouseEvent<HTMLDivElement>) => onClickClose(e)}
        >
            <div className={cls.results}>
                {users ? (
                    users.map((user) => {
                        return (
                            <div key={user.userId}>
                                {user.lastName}
                                {user.firstName}
                            </div>
                        )
                    })
                ) : (
                    <div>Пользователей не найдено</div>
                )}
            </div>
        </div>
    )
}
