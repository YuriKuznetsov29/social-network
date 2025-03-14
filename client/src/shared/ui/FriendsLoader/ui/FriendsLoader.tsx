import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useMobile } from '@/shared/lib/hook/useMobile'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { Box, Paper, Skeleton, Stack } from '@mui/material'

import cls from './FriendsLoader.module.scss'

export const FriendsLoader = () => {
    const isMobile = useMobile()

    const renderSkeletons = () => {
        const skeletons = []
        const skeletonsCount = isMobile ? 5 : 11

        for (let i = 0; i < skeletonsCount; i++) {
            skeletons.push(
                <Stack key={i} alignItems="center" spacing={1}>
                    <Skeleton variant="circular" width={60} height={60} />
                    <Skeleton variant="text" sx={{ fontSize: '1rem', width: '60px' }} />
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
                        width: '100%',
                        padding: '16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: 2,
                        overflowX: 'auto',
                    }}
                    elevation={1}
                >
                    <Skeleton variant="text" sx={{ width: '100px', height: '32px' }} />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            gap: 2,
                        }}
                    >
                        {renderSkeletons()}
                    </Box>
                </Paper>
            }
            off={
                <ContentContainer className={cls.container}>
                    <div className={cls.title}></div>
                    <div className={cls.usersContainer}>
                        {isMobile ? (
                            <>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div className={cls.friend}>
                                    <div className={cls.avatar}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                            </>
                        )}
                    </div>
                </ContentContainer>
            }
        />
    )
}
