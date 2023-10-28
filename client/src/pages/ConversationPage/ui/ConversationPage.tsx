import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { Dialog } from 'entities/Dialog'
import { useMobile } from 'shared/lib/hook/useMobile'
import cls from './ConversationPage.module.scss'

interface ConversationPageProps {
    className?: string
}

export const ConversationPage = ({ className }: ConversationPageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.contentContainer : ''}>
                {/* <SideBar /> */}
                <Dialog />
            </Container>
        </>
    )
}

export default ConversationPage
