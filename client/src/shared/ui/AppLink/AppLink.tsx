import classNames from 'classnames'
import { FC } from 'react'
import { Link, LinkProps, NavLink } from 'react-router-dom'

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
    scroll?: boolean
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        className,
        children,
        to,
        theme = AppLinkTheme.PRIMARY,
        active,
        activeClass,
        scroll,
        ...otherProps
    } = props

    const onClickResetScroll = () => {
        if (scroll) document.documentElement.scrollTop = 0
    }

    return (
        <>
            {active ? (
                <NavLink
                    to={to}
                    className={({ isActive, isPending }) => {
                        return classNames(cls.navbar, { [cls.activeClass]: isActive }, [
                            className,
                            cls[theme],
                        ])
                    }}
                    onClick={onClickResetScroll}
                    {...otherProps}
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
