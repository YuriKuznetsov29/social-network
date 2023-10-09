import classNames from 'classnames'
import Container from 'shared/ui/Container/Container'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'features/AuthByEmail'
import { FoundUsersList } from 'features/FindUsers'
import { Notification } from 'features/Notifications'
import { SettingBtn } from 'entities/SettingBtn'
import cls from './Header.module.scss'
import { useMobile } from 'shared/lib/hook/useMobile'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const mobile = useMobile()

    return (
        <div className={cls.container}>
            <div className={classNames(cls.Header, { [cls.mobile]: mobile }, [])}>
                <Container className={cls.contentContainer} headerStyle>
                    <FoundUsersList />
                    <SettingBtn />
                </Container>
            </div>
            <Notification />
        </div>
    )
}
