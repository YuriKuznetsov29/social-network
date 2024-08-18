import classNames from 'classnames'
import { Header } from '@/widgets/Header'
import Container from '@/shared/ui/Container/Container'
import { SideBar } from '@/widgets/SideBar'
import cls from './AnotherUserPage.module.scss'
import { AnotherUserProfile } from '@/features/GetAnotherUserData/ui/AnotherUserProfile'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Container as MuiContainer, Stack } from '@mui/material'

interface AnotherUserPageProps {
    className?: string
}

const AnotherUserPage = ({ className }: AnotherUserPageProps) => {
    const isMobile = useMobile()
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Header />
                    <MuiContainer sx={{ display: 'flex' }}>
                        <SideBar />
                        <Stack spacing={2} width="100%" maxWidth="892px">
                            <AnotherUserProfile />
                        </Stack>
                    </MuiContainer>
                </>
            }
            off={
                <>
                    <Header />
                    <Container className={isMobile ? cls.container : ''}>
                        <SideBar />
                        <div className={classNames(cls.contentWrapper, {}, [className])}>
                            <AnotherUserProfile />
                        </div>
                    </Container>
                </>
            }
        />
    )
}

export default AnotherUserPage
