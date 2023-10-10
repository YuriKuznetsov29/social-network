import classNames from 'classnames'
import { Link, LinkProps, NavLink } from 'react-router-dom'
import { FC } from 'react'

import cls from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
    active?: boolean
    activeClass?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        active,
        activeClass,
        ...otherProps
    } = props

    return (
        <>
            {active ? (
                <NavLink
                    to={to}
                    className={({ isActive, isPending }) => {
                        console.log(activeClass, isActive, 'active')
                        return classNames(cls.navbar, { [cls.activeClass]: isActive }, [
                            className,
                            cls[theme],
                        ])
                    }}
                >
                    {children}
                </NavLink>
            ) : (
                <Link
                    to={to}
                    className={classNames(cls.navbar, {}, [className, cls[theme]])}
                    {...otherProps}
                >
                    {children}
                </Link>
            )}
        </>
    )
}
