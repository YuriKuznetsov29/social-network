import classNames from 'classnames'
import cls from './Container.module.scss'
import { ReactNode } from 'react'
import { useMobile } from 'shared/lib/hook/useMobile'

interface ContainerProps {
    className?: string
    children: ReactNode
    headerStyle?: boolean
    mobile?: boolean
}

const Container = (props: ContainerProps) => {
    const { className, children, headerStyle, mobile } = props
    const isMobile = useMobile()

    return (
        <div
            className={classNames(
                cls.Container,
                { [cls.header]: headerStyle, [cls.mobile]: mobile && isMobile },
                []
            )}
        >
            {children}
        </div>
    )
}

export default Container
