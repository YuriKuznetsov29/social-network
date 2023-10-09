import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { Dialog } from 'entities/Dialog'
import cls from './ConversationPage.module.scss'

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
