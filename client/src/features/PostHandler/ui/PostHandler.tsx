import classNames from 'classnames'
import cls from './PostHandler.module.scss'

interface PostHandlerProps {
    className?: string
}

export const PostHandler = ({ className }: PostHandlerProps) => {
    return <div className={classNames(cls.PostHandler, {}, [className])}></div>
}
