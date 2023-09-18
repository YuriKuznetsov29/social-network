import classNames from 'classnames'
import cls from './FoundUsersList.module.scss'
import { useAppDispatch, useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getSearchUsersState } from '../model/selectors/getSearchUsersState'
import { MouseEventHandler, useEffect, useState, MouseEvent } from 'react'
import { findUsers } from '../model/services/findUsers'
import { Avatar } from 'widgets/Avatar'

interface FoundUsersListProps {
    className?: string
}

export const FoundUsersList = ({ className }: FoundUsersListProps) => {
    const [showResults, setShowResults] = useState(false)

    const dispatch = useAppDispatch()
    const { users, firstName, lastName } = useAppSelector(getSearchUsersState)

    useEffect(() => {
        dispatch(findUsers({ firstName, lastName }))

        if (firstName || lastName) {
            setShowResults(true)
        }
    }, [firstName, lastName])

    const onClickClose = (e: MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget === e.target) {
            setShowResults(false)
        }
    }

    useEffect(() => {
        const closeSearch = (e: React.MouseEvent<HTMLElement>) => {
            if (e.currentTarget.id !== 'closeSearch') {
                setShowResults(false)
            }
        }

        // document.body.addEventListener('click', (e: React.MouseEvent<HTMLElement>) => {

        // })
    })

    return (
        <div
            className={classNames(cls.FoundUsersList, { [cls.show]: showResults }, [className])}
            onClick={(e: MouseEvent<HTMLDivElement>) => onClickClose(e)}
        >
            <div className={cls.results}>
                {users ? (
                    users.map((user) => {
                        console.log(user)
                        return (
                            <div key={user.userId} className={cls.userContainer}>
                                <Avatar avatarPath={user.avatarPath} />
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
