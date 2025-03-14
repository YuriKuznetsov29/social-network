import { Messenger } from '@/features/Messenger'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useMobile } from '@/shared/lib/hook/useMobile'
import Container from '@/shared/ui/Container/Container'
import { Header } from '@/widgets/Header'
import { MobileNavigation } from '@/widgets/MobileNavigation/ui/MobileNavigation'
import { SideBar } from '@/widgets/SideBar'
import { Container as MuiContainer, Box } from '@mui/material'

import cls from './MessengerPage.module.scss'

const MessengerPage = () => {
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
                                xs: '72px',
                                sm: '72px',
                            },
                        }}
                    >
                        <SideBar />
                        <Box
                            width="100%"
                            sx={{ maxWidth: { xl: '892px', lg: '892px', md: '892px' } }}
                        >
                            <Messenger />
                        </Box>
                    </MuiContainer>
                    <MobileNavigation activeBtn={2} />
                </>
            }
            off={
                <>
                    <Header />
                    <Container className={isMobile ? cls.container : ''}>
                        <SideBar />
                        <div style={{ width: '100%' }}>
                            <Messenger />
                        </div>
                    </Container>
                </>
            }
        />
    )
}

export default MessengerPage
