import classNames from 'classnames'
import cls from './Dialog.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Button } from 'shared/ui/Button/Button'
import User from 'shared/assets/icons/user.svg'
import Arrow from 'shared/assets/icons/caret-left-bold.svg'
import { Input } from 'shared/ui/Input/Input'
import { useParams } from 'react-router-dom'

interface DialogProps {
    className?: string
}

export const Dialog = ({ className }: DialogProps) => {
    console.log(useParams())
    return (
        <ContentContainer className={cls.contentContainer}>
            <div className={cls.dialogHeader}>
                <Button className={cls.backButton}>
                    <Arrow /> Назад
                </Button>
                Имя диалога
                <User className={cls.dialogIcon} />
            </div>
            <div className={cls.messagesBlock}>
                <div>Сообщение</div>
                <div>Сообщение</div>
                <div>Сообщение</div>
                <div>Сообщение</div>
                <div>Сообщение</div>
                <div>Сообщение</div>
                <div>Сообщение</div>
            </div>
            <div className={cls.inputBlock}>
                <Input placeholder="Напишите сообщение..." className={cls.inputMessage} />
            </div>
        </ContentContainer>
    )
}
