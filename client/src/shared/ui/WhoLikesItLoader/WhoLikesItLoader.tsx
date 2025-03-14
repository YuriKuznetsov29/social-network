
import cls from './WhoLikesItLoader.module.scss'

interface WhoLikesItLoaderProps {
    className?: string
}

export const WhoLikesItLoader = ({ className }: WhoLikesItLoaderProps) => {
    return (
        <>
            <div className={cls.user}>
                <div className={cls.avatar}></div>
                <div className={cls.textItem}></div>
            </div>
            <div className={cls.user}>
                <div className={cls.avatar}></div>
                <div className={cls.textItem}></div>
            </div>
            <div className={cls.user}>
                <div className={cls.avatar}></div>
                <div className={cls.textItem}></div>
            </div>
            <div className={cls.user}>
                <div className={cls.avatar}></div>
                <div className={cls.textItem}></div>
            </div>
        </>
    )
}
