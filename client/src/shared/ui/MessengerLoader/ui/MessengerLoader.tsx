import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { Paper, Skeleton, Stack } from '@mui/material'

import cls from './MessengerLoader.module.scss'

export const MessengerLoader = () => {
    const renderSkeletons = () => {
        const skeletons = []
        const skeletonsCount = 10

        for (let i = 0; i < skeletonsCount; i++) {
            skeletons.push(
                <Stack
                    key={i}
                    sx={{ width: '100%', padding: '16px' }}
                    direction={'row'}
                    spacing={2}
                >
                    <Skeleton variant="circular" width={80} height={80} />
                    <Stack flexGrow={1}>
                        <Stack direction="row" justifyContent={'space-between'}>
                            <Skeleton variant="text" width={100} height={20} />
                            <Stack direction="row" spacing={1} alignItems={'center'}>
                                <Skeleton variant="text" width={100} height={20} />
                                <Skeleton variant="circular" width={40} height={40} />
                            </Stack>
                        </Stack>
                        <Stack direction="row" alignItems={'center'} spacing={1}>
                            <Skeleton variant="circular" width={40} height={40} />
                            <Skeleton variant="text" width={200} height={20} />
                        </Stack>
                    </Stack>
                </Stack>
            )
        }
        return skeletons
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                    elevation={1}
                >
                    {renderSkeletons()}
                </Paper>
            }
            off={
                <ContentContainer className={cls.container}>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                    <div className={cls.conversation}>
                        <div className={cls.avatar}></div>
                        <div className={cls.message}>
                            <div className={cls.header}>
                                <div className={cls.author}></div>
                                <div className={cls.time}></div>
                            </div>
                            <div className={cls.messageContainer}>
                                <div className={cls.avatarSmall}></div>
                                <div className={cls.messageText}></div>
                            </div>
                        </div>
                    </div>
                </ContentContainer>
            }
        />
    )
}
