import cls from './FriendsPage.module.scss'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { FriendsList } from 'entities/FriendsList'
import { useMobile } from 'shared/lib/hook/useMobile'

interface FriendsPageProps {
    className?: string
}

const FriendsPage = ({ className }: FriendsPageProps) => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <FriendsList />
            </Container>
        </>
    )
}

export default FriendsPage
