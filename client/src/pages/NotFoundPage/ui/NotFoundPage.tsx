import classNames from 'classnames'
import cls from './NotFoundPage.module.scss'
import { Input } from 'shared/ui/Input/Input'

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    return (
        <div data-testid="not-found" className={classNames(cls.NotFoundPage, {}, [className])}>
            Страница не найдена
        </div>
    )
}
