import classNames from 'classnames'
import cls from './Header.module.scss'
import Container from 'shared/ui/Container/Container'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'app/Providers/StoreProvider/config/hooks'
import { redirect, useNavigate } from 'react-router-dom'
import { signOut } from 'features/AuthByEmail'

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
                    <Input className={cls.search} placeholder="Поиск" type="search"></Input>
                    <Button className={cls.outBtn} onClick={onSignOut}>
                        Выйти
                    </Button>
                </Container>
            </div>
        </div>
    )
}
