import classNames from 'classnames'
import cls from './WhoLikesIt.module.scss'

interface WhoLikesItProps {
    className?: string
}

export const WhoLikesIt = ({ className }: WhoLikesItProps) => {
    return <div className={classNames(cls.WhoLikesIt, {}, [className])}></div>
}
