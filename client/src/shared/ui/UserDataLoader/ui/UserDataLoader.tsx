import ContentLoader from 'react-content-loader'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import cls from './UserDataLoader.module.scss'

export const UserDataLoader = () => (
    <ContentContainer className={cls.container}>
        <div className={cls.left}>
            <div className={cls.avatar}></div>
            <div className={cls.username}></div>
        </div>
        <div className={cls.right}>
            <div>
                <div className={cls.textItem}></div>
                <div className={cls.textItem}></div>
                <div className={cls.textItem}></div>
                <div className={cls.textItem}></div>
            </div>
            <div>
                <div className={cls.textItem}></div>
                <div className={cls.textItem}></div>
                <div className={cls.textItem}></div>
                <div className={cls.textItem}></div>
            </div>
        </div>
    </ContentContainer>
)
