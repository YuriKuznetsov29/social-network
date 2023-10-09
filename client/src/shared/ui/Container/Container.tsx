import classNames from 'classnames'
import cls from './Container.module.scss'
import { ReactNode } from 'react'

interface ContainerProps {
    className?: string
    children: ReactNode
    headerStyle?: boolean
}

const Container = (props: ContainerProps) => {
    const { className, children, headerStyle } = props
    return (
        <div className={classNames(cls.Container, { [cls.header]: headerStyle }, [])}>
            {children}
        </div>
    )
}

export default Container
