import { FriendsList } from '@/entities/Friends'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useMobile } from '@/shared/lib/hook/useMobile'
import Container from '@/shared/ui/Container/Container'
import { Header } from '@/widgets/Header'
import { MobileNavigation } from '@/widgets/MobileNavigation/ui/MobileNavigation'
import { SideBar } from '@/widgets/SideBar'
import { Stack, Container as MuiContainer } from '@mui/material'

interface FriendsPageProps {
    className?: string
}

const FriendsPage = ({ className }: FriendsPageProps) => {
    const isMobile = useMobile()
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <>
                    <Header />
                    <MuiContainer
                        data-testid="friends-page"
                        sx={{
                            display: 'flex',
                            pb: {
                                xs: '72px',
                                sm: '72px',
                            },
                        }}
                    >
                        <SideBar />
                        <Stack
                            spacing={2}
                            width="100%"
                            sx={{ maxWidth: { xl: '892px', lg: '892px', md: '892px' } }}
                        >
                            <FriendsList />
                        </Stack>
                    </MuiContainer>
                    <MobileNavigation activeBtn={3} />
                </>
            }
            off={
                <>
                    <Header />
                    <Container>
                        <SideBar />
                        <FriendsList />
                    </Container>
                </>
            }
        />
    )
}

export default FriendsPage
