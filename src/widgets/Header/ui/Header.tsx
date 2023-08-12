import classNames from 'classnames'
import cls from './Header.module.scss'
import Container from 'shared/ui/Container/Container'
import { Input } from 'shared/ui/Input/Input'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    return (
        <div className={classNames(cls.Header, {}, [className])}>
            <Container>
                <Input placeholder="Поиск" type="search"></Input>
            </Container>
        </div>
    )
}
