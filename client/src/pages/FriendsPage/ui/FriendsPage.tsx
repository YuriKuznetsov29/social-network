import cls from './FriendsPage.module.scss'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { FriendsList } from 'entities/FriendsList'

interface FriendsPageProps {
    className?: string
}

export const FriendsPage = ({ className }: FriendsPageProps) => {
    return (
        <>
            <Header />
            <Container className={cls.contentContainer}>
                <SideBar />
                <FriendsList />
            </Container>
        </>
    )
}
