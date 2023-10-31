import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { Dialog } from 'entities/Dialog'
import { useMobile } from 'shared/lib/hook/useMobile'
import cls from './ConversationPage.module.scss'
import { SideBar } from 'widgets/SideBar'

interface ConversationPageProps {
    className?: string
}

export const ConversationPage = ({ className }: ConversationPageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.contentContainer : ''}>
                {!isMobile && <SideBar />}
                <Dialog />
            </Container>
        </>
    )
}

export default ConversationPage
