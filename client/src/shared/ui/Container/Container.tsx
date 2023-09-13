import classNames from 'classnames'
import cls from './Container.module.scss'
import { ReactNode } from 'react'

interface ContainerProps {
    className?: string
    children: ReactNode
}

const Container = (props: ContainerProps) => {
    const { className, children } = props
    return <div className={classNames(cls.Container, {}, [className])}>{children}</div>
}

export default Container
