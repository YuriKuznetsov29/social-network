import classNames from 'classnames'
import cls from './CreatePostLoader.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'

interface CreatePostLoaderProps {
    className?: string
}

export const CreatePostLoader = ({ className }: CreatePostLoaderProps) => {
    return (
        <ContentContainer className={cls.container}>
            <div className={cls.input}></div>
            <div className={cls.btnContainer}>
                <div className={cls.btn}></div>
                <div className={cls.btn}></div>
            </div>
        </ContentContainer>
    )
}
