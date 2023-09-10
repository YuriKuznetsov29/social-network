import classNames from 'classnames'
import cls from './Messenger.module.scss'
import { Dialog } from 'widgets/Dialog'
import useChat from '../../../widgets/Dialog/model/useChat'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { Input } from 'shared/ui/Input/Input'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ConversationLink } from 'widgets/ConversationLink'

interface MessengerProps {
    className?: string
}

export const Messenger = ({ className }: MessengerProps) => {
    const { userData } = useAppSelector(getAuthState)

    return (
        <div className={classNames(cls.Messenger, {}, [className])}>
            <ContentContainer className={cls.contentContainer}>
                <Input placeholder="Поиск" className={cls.inputSearch} />
                {userData.conversations.map(({ roomId }) => (
                    <ConversationLink roomId={roomId} />
                ))}
            </ContentContainer>
        </div>
    )
}
