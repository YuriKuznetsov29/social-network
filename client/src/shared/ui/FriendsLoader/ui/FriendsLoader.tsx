import { useMobile } from 'shared/lib/hook/useMobile'
import cls from './FriendsLoader.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'

export const FriendsLoader = () => {
    const isMobile = useMobile()
    return (
        <ContentContainer className={cls.container}>
            <div className={cls.title}></div>
            <div className={cls.usersContainer}>
                {isMobile ? (
                    <>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                        <div className={cls.friend}>
                            <div className={cls.avatar}></div>
                            <div className={cls.textItem}></div>
                        </div>
                    </>
                )}
            </div>
        </ContentContainer>
    )
}
