import classNames from 'classnames'
import cls from './ConversationPage.module.scss'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ChangeProfile } from 'widgets/ChangeProfile'
import { Dialog } from 'widgets/Dialog'

interface ConversationPageProps {
    className?: string
}

export const ConversationPage = ({ className }: ConversationPageProps) => {
    return (
        <>
            <Header />
            <Container className={cls.contentContainer}>
                <SideBar />
                <Dialog />
            </Container>
        </>
    )
}
