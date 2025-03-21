import { ConversationLink } from '@/entities/ConversationLink'
import { IUser } from '@/entities/UserData'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { Dialog } from '../../model/types/dialog'
import cls from './Messenger.module.scss'

interface MessengerProps {
    className?: string
    userData: IUser
    dialogs: Dialog[]
}

export const Messenger = ({ className, userData, dialogs }: MessengerProps) => {
    const { t } = useTranslation('pages')

    return (
        <div data-testid="dialogs" className={classNames(cls.Messenger, {}, [className])}>
            {userData?.conversations?.length ? (
                <ContentContainer className={cls.contentContainer}>
                    {dialogs.map(({ message, companion, conversation }) => {
                        return (
                            <ConversationLink
                                key={conversation.roomId}
                                message={message}
                                companion={companion}
                                conversation={conversation}
                            />
                        )
                    })}
                </ContentContainer>
            ) : (
                t('У вас еще нет диалогов')
            )}
        </div>
    )
}
