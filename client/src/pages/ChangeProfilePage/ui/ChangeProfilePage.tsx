import { ChangeProfile } from '@/features/AuthByEmail'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useMobile } from '@/shared/lib/hook/useMobile'
import Container from '@/shared/ui/Container/Container'
import { Header } from '@/widgets/Header'
import { MobileNavigation } from '@/widgets/MobileNavigation/ui/MobileNavigation'
import { SideBar } from '@/widgets/SideBar'
import { Container as MuiContainer, Box } from '@mui/material'
import classNames from 'classnames'

import cls from './ChangeProfilePage.module.scss'

interface ProfilePageProps {
    className?: string
}

const ChangeProfilePage = ({ className }: ProfilePageProps) => {
    const isMobile = useMobile()
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Header />
                    <MuiContainer sx={{ display: 'flex' }}>
                        <SideBar />
                        <Box
                            width="100%"
                            sx={{ maxWidth: { xl: '892px', lg: '892px', md: '892px' } }}
                        >
                            <ChangeProfile />
                        </Box>
                    </MuiContainer>
                    <MobileNavigation />
                </>
            }
            off={
                <>
                    <Header />
                    <Container className={isMobile ? cls.container : ''}>
                        <SideBar />
                        <div
                            data-testid="edit-profile"
                            className={classNames(cls.contentWrapper, {}, [className])}
                        >
                            <ChangeProfile />
                        </div>
                    </Container>
                </>
            }
        />
    )
}

export default ChangeProfilePage
