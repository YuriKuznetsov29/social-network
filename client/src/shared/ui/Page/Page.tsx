import { useInfiniteScroll } from '@/shared/lib/hook/useInfiniteScroll'
import classNames from 'classnames'
import { MutableRefObject, ReactNode, useRef } from 'react'

import cls from './Page.module.scss'

interface PageProps {
    className?: string
    children: ReactNode
    onScrollEnd?: () => void
}

export const Page = ({ className, children, onScrollEnd }: PageProps) => {
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

    useInfiniteScroll({ triggerRef, wrapperRef, callback: onScrollEnd })

    return (
        <span ref={wrapperRef} className={classNames(cls.Page, {}, [className])}>
            {children}
            <div className={cls.trigger} ref={triggerRef} />
        </span>
    )
}
