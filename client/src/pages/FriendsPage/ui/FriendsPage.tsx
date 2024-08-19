import { Header } from '@/widgets/Header'
import Container from '@/shared/ui/Container/Container'
import { SideBar } from '@/widgets/SideBar'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { FriendsList } from '@/entities/Friends'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Stack, Container as MuiContainer } from '@mui/material'
import { MobileNavigation } from '@/widgets/MobileNavigation/ui/MobileNavigation'

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
                    <MuiContainer sx={{ display: 'flex' }}>
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
