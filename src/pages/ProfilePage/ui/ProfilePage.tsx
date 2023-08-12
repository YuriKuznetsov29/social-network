import classNames from 'classnames'
import cls from './ProfilePage.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <>
            <Header />
            <Container>
                <div className={classNames(cls.ProfilePage, {}, [className])}>
                    <SideBar />
                    <div>
                        <ContentContainer>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="50"
                                height="50"
                                fill="#ffffff"
                                viewBox="0 0 256 256"
                            >
                                <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                            </svg>
                            <h1>Юрий Кузнецов</h1>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae,
                            deleniti voluptate! Perferendis excepturi distinctio aspernatur, placeat
                            sint natus illo voluptas maiores ipsum quas dolor totam delectus nulla
                            ducimus, a in!
                        </ContentContainer>
                        <ContentContainer>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque unde,
                            nisi harum voluptatem eum inventore eveniet libero consequatur placeat,
                            quasi qui quod a pariatur eius quos. Vero natus facilis cum.
                        </ContentContainer>
                        Profile page
                    </div>
                </div>
            </Container>
        </>
    )
}

export default ProfilePage
