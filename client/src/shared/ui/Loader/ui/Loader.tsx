import classNames from 'classnames'

import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
    center?: boolean
    size?: 'S' | 'M' | 'L'
}

export const Loader = ({ className, center, size = 'L' }: LoaderProps) => {
    return (
        <div className={classNames(cls.Loader, { [cls.loadPage]: center }, [className])}>
            <div className={classNames(cls.lds_ring, {}, [cls[size]])}>
                <div className={cls[size]}></div>
                <div className={cls[size]}></div>
                <div className={cls[size]}></div>
                <div className={cls[size]}></div>
            </div>
        </div>
    )
}
