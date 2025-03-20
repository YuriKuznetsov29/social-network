import { useMobile } from '@/shared/lib/hook/useMobile'
import classNames from 'classnames'
import { MutableRefObject, ReactNode } from 'react'

import cls from './Container.module.scss'

interface ContainerProps {
    className?: string
    children: ReactNode
    headerStyle?: boolean
    wrapperRef?: MutableRefObject<HTMLDivElement>
}

const Container = (props: ContainerProps) => {
    const { className, children, headerStyle, wrapperRef } = props
    const isMobile = useMobile()

    return (
        <div
            className={classNames(
                cls.Container,
                { [cls.header]: headerStyle, [cls.mobile]: isMobile && !headerStyle },
                [className]
            )}
            ref={wrapperRef}
        >
            {children}
        </div>
    )
}

export default Container
