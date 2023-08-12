import classNames from 'classnames'
import cls from './ProfilePage.module.scss'
import { AppLink } from 'shared/ui/AppLink/AppLink'

interface ProfilePageProps {
    className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    return (
        <div className={classNames(cls.ProfilePage, {}, [className])}>
            <AppLink to={'/'}>Main Page Link</AppLink>
            Profile page
        </div>
    )
}

export default ProfilePage
