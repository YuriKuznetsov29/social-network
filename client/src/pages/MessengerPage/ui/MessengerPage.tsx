import cls from './MessengerPage.module.scss'
import Container from 'shared/ui/Container/Container'
import { Header } from 'widgets/Header'
import { SideBar } from 'widgets/SideBar'
import { Messenger } from 'features/Messenger'

export const MessengerPage = () => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div style={{ width: '100%' }}>
                    <Messenger />
                </div>
            </Container>
        </>
    )
}
