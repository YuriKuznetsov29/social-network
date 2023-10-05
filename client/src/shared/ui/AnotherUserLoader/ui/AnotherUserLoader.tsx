import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import cls from './AnotherUserLoader.module.scss'

export const AnotherUserLoader = () => (
    <ContentContainer className={cls.container}>
        <div className={cls.left}>
            <div className={cls.avatar}></div>
            <div className={cls.username}></div>
        </div>
        <div className={cls.right}>
            <div className={cls.dataWrapper}>
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
            <div className={cls.btn}></div>
            <div className={cls.btn}></div>
        </div>
    </ContentContainer>
)
