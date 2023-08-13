import classNames from 'classnames'
import cls from './MessengerPage.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'

interface MessengerPageProps {
    className?: string
}

export const MessengerPage = ({ className }: MessengerPageProps) => {
    return (
        <>
            <Header />
            <Container>
                <div className={classNames(cls.MessengerPage, {}, [className])}>
                    <SideBar />
                    <ContentContainer>
                        <div>
                            <User />
                            Имя
                        </div>
                        <div>
                            <User />
                            Имя
                        </div>
                        <div>
                            <User />
                            Имя
                        </div>
                        <div>
                            <User />
                            Имя
                        </div>
                    </ContentContainer>
                </div>
            </Container>
        </>
    )
}
