import { Dialog } from '@/entities/Dialog'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useMobile } from '@/shared/lib/hook/useMobile'
import Container from '@/shared/ui/Container/Container'
import { Header } from '@/widgets/Header'
import { MobileNavigation } from '@/widgets/MobileNavigation/ui/MobileNavigation'
import { SideBar } from '@/widgets/SideBar'
import { Container as MuiContainer, Box } from '@mui/material'

import cls from './ConversationPage.module.scss'
interface ConversationPageProps {
    className?: string
}

export const ConversationPage = ({ className }: ConversationPageProps) => {
    const isMobile = useMobile()
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Header />
                    <MuiContainer
                        sx={{
                            display: 'flex',
                            pb: {
                                xs: '56px',
                                sm: '56px',
                                md: '0',
                            },
                            height: 'calc(100dvh - 88px)',
                        }}
                    >
                        <SideBar />
                        <Box
                            width="100%"
                            sx={{ maxWidth: { xl: '892px', lg: '892px', md: '892px' } }}
                        >
                            <Dialog />
                        </Box>
                    </MuiContainer>
                    <MobileNavigation activeBtn={2} />
                </>
            }
            off={
                <>
                    <Header />
                    <Container className={isMobile ? cls.contentContainer : ''}>
                        {!isMobile && <SideBar />}
                        <Dialog />
                    </Container>
                </>
            }
        />
    )
}

export default ConversationPage
