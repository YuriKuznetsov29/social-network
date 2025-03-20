import { SettingBtn } from '@/entities/SettingBtn'
import { FoundUsersList } from '@/features/FindUsers'
import { Notification } from '@/features/Notifications'
import { useMobile } from '@/shared/lib/hook/useMobile'
import Container from '@/shared/ui/Container/Container'
import classNames from 'classnames'

import cls from './Header.module.scss'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
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
