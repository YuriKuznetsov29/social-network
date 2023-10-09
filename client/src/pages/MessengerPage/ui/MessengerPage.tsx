import cls from './MessengerPage.module.scss'
import Container from 'shared/ui/Container/Container'
import { Header } from 'widgets/Header'
import { SideBar } from 'widgets/SideBar'
import { Messenger } from 'features/Messenger'
import { useMobile } from 'shared/lib/hook/useMobile'

export const MessengerPage = () => {
    const isMobile = useMobile()
    return (
        <>
            <Header />
            <Container className={isMobile ? cls.container : ''}>
                <SideBar />
                <div style={{ width: '100%' }}>
                    <Messenger />
                </div>
            </Container>
        </>
    )
}
