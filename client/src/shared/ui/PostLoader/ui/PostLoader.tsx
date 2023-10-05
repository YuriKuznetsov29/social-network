import cls from './PostLoader.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'

export const PostLoader = () => {
    return (
        <ContentContainer className={cls.container}>
            <div className={cls.postHeader}>
                <div className={cls.avatar}></div>
                <div>
                    <div className={cls.author}></div>
                    <div className={cls.time}></div>
                </div>
            </div>
            <div className={cls.textItemL}></div>
            <div className={cls.textItemM}></div>
            <div className={cls.textItemS}></div>

            <div className={cls.image}></div>

            <div className={cls.btnWrapper}>
                <div className={cls.btn}></div>
                <div className={cls.btn}></div>
            </div>
        </ContentContainer>
    )
}
