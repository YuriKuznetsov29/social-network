import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import cls from './AnotherUserLoader.module.scss'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Paper, Skeleton, Stack } from '@mui/material'
import { PostLoader } from '../../PostLoader'

export const AnotherUserLoader = () => {
    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={
                <>
                    <Paper
                        sx={{
                            padding: '16px',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                        elevation={1}
                    >
                        <Stack alignItems={'flex-start'} spacing={2}>
                            <Skeleton variant="circular" width={160} height={160} />
                            <Stack direction={'row'} spacing={1}>
                                <Skeleton variant="text" width={100} height={30} />
                                <Skeleton variant="text" width={100} height={30} />
                            </Stack>
                        </Stack>
                        <Stack spacing={1}>
                            <Skeleton variant="text" width={200} height={20} />
                            <Skeleton variant="text" width={200} height={20} />
                            <Skeleton variant="text" width={200} height={20} />
                            <Skeleton variant="text" width={200} height={20} />
                            <Skeleton variant="text" width={200} height={20} />
                            <Stack spacing={2}>
                                <Skeleton variant="rounded" width={200} height={40} />
                                <Skeleton variant="rounded" width={200} height={40} />
                            </Stack>
                        </Stack>
                    </Paper>
                    <PostLoader />
                </>
            }
            off={
                <div className={cls.usersContainer}>
                    <ContentContainer className={cls.container}>
                        <div className={cls.left}>
                            <div className={cls.avatar}></div>
                            <div className={cls.username}></div>
                        </div>
                        <div className={cls.right}>
                            <div className={cls.dataWrapper}>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                            </div>
                            <div className={cls.btn}></div>
                            <div className={cls.btn}></div>
                        </div>
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        <div className={cls.left}>
                            <div className={cls.avatar}></div>
                            <div className={cls.username}></div>
                        </div>
                        <div className={cls.right}>
                            <div className={cls.dataWrapper}>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                            </div>
                            <div className={cls.btn}></div>
                            <div className={cls.btn}></div>
                        </div>
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        <div className={cls.left}>
                            <div className={cls.avatar}></div>
                            <div className={cls.username}></div>
                        </div>
                        <div className={cls.right}>
                            <div className={cls.dataWrapper}>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                            </div>
                            <div className={cls.btn}></div>
                            <div className={cls.btn}></div>
                        </div>
                    </ContentContainer>
                    <ContentContainer className={cls.container}>
                        <div className={cls.left}>
                            <div className={cls.avatar}></div>
                            <div className={cls.username}></div>
                        </div>
                        <div className={cls.right}>
                            <div className={cls.dataWrapper}>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                                <div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                    <div className={cls.textItem}></div>
                                </div>
                            </div>
                            <div className={cls.btn}></div>
                            <div className={cls.btn}></div>
                        </div>
                    </ContentContainer>
                </div>
            }
        />
    )
}
