import classNames from 'classnames'
import cls from './Header.module.scss'
import Container from 'shared/ui/Container/Container'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'features/AuthByEmail'
import { FoundUsersList } from 'features/FindUsers'
import { useEffect, useState } from 'react'
import { MouseEvent } from 'react'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSignOut = () => {
        dispatch(signOut())
        navigate('/')
    }

    return (
        <div className={cls.container}>
            <div className={classNames(cls.Header, {}, [className])}>
                <Container className={cls.contentContainer}>
                    <FoundUsersList />
                    <Button className={cls.outBtn} onClick={onSignOut}>
                        Выйти
                    </Button>
                </Container>
            </div>
        </div>
    )
}
