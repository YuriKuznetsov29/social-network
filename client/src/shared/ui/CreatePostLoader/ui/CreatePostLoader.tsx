import classNames from 'classnames'
import cls from './CreatePostLoader.module.scss'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Box, Paper, Skeleton } from '@mui/material'

interface CreatePostLoaderProps {
    className?: string
}

export const CreatePostLoader = ({ className }: CreatePostLoaderProps) => {
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
                        gap: 2,
                    }}
                    elevation={1}
                >
                    <Skeleton variant="rounded" width="100%" height={56} />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 2,
                        }}
                    >
                        <Skeleton variant="circular" width="20px" height="20px" />
                        <Skeleton variant="circular" width="20px" height="20px" />
                    </Box>
                </Paper>
            }
            off={
                <ContentContainer className={cls.container}>
                    <div className={cls.input}></div>
                    <div className={cls.btnContainer}>
                        <div className={cls.btn}></div>
                        <div className={cls.btn}></div>
                    </div>
                </ContentContainer>
            }
        />
    )
}
