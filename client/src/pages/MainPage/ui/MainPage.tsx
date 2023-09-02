import classNames from 'classnames'
import cls from './MainPage.module.scss'
import Container from 'shared/ui/Container/Container'
import { SideBar } from 'widgets/SideBar/ui/SideBar'
import { Header } from 'widgets/Header'
import { Input } from 'shared/ui/Input/Input'

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <div>MainPage</div>
        </div>
    )
}

export default MainPage