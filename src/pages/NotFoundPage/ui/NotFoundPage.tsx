import classNames from 'classnames'
import cls from './NotFoundPage.module.scss'
import { Input } from 'shared/ui/Input/Input'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найдена
            <Input placeholder="Поиск" type="search"></Input>
            <input />
        </div>
    )
}
