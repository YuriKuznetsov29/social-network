import classNames from 'classnames'
import cls from './ProfilePage.module.scss'
import { Header } from 'widgets/Header'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { UserData } from 'widgets/UserData/ui/UserData'
import { Friends } from 'widgets/Friends'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div className={classNames(cls.contentWrapper, {}, [className])}>
                    <UserData />
                    <Friends />
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rem aut illum
                        sequi adipisci quibusdam commodi dicta cum obcaecati esse magni, atque
                        suscipit, autem a beatae eligendi aliquid. Exercitationem, sequi? Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Magni, itaque cupiditate
                        vel facilis labore totam laborum architecto, commodi qui, eligendi dolorum
                        fugiat consequatur quibusdam laudantium. Quia ea pariatur ad nemo! Lorem
                        ipsum dolor sit amet consectetur adipisicing elit. Labore, doloribus
                        delectus ducimus, ullam pariatur voluptatem tenetur sapiente perspiciatis
                        suscipit ab provident natus placeat. Reiciendis dignissimos rem officiis
                        repellat, velit consequuntur.
                    </ContentContainer>
                </div>
            </Container>
        </>
    )
}

export default ProfilePage
