import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { Dialog } from 'entities/Dialog'
import cls from './ConversationPage.module.scss'
import { useMobile } from 'shared/lib/hook/useMobile'

interface ConversationPageProps {
    className?: string
}

export const ConversationPage = ({ className }: ConversationPageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.contentContainer : ''}>
                <SideBar />
                <Dialog />
            </Container>
        </>
    )
}
