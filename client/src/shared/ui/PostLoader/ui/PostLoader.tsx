import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import cls from './PostLoader.module.scss'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { Card, CardActions, CardContent, CardHeader, Skeleton } from '@mui/material'

export const PostLoader = () => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card sx={{ maxWidth: '100%' }}>
                    <CardHeader
                        avatar={<Skeleton variant="circular" width={60} height={60} />}
                        action={<Skeleton variant="circular" width="40px" height="40px" />}
                        title={<Skeleton variant="text" width={100} height={20} />}
                        subheader={<Skeleton variant="text" width={100} height={20} />}
                    />
                    <Skeleton variant="rectangular" width="100%" height="25vh" />
                    <CardContent>
                        <Skeleton variant="text" width="100%" height={25} />
                        <Skeleton variant="text" width="100%" height={25} />
                        <Skeleton variant="text" width="100%" height={25} />
                        <Skeleton variant="text" width="100%" height={25} />
                    </CardContent>
                    <CardActions
                        sx={{
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Skeleton variant="circular" width="40px" height="40px" />
                        <Skeleton variant="circular" width="40px" height="40px" />
                        <Skeleton variant="circular" width="40px" height="40px" />
                    </CardActions>
                </Card>
            }
            off={
                <ContentContainer className={cls.container}>
                    <div className={cls.postHeader}>
                        <div className={cls.avatar}></div>
                        <div>
                            <div className={cls.author}></div>
                            <div className={cls.time}></div>
                        </div>
                    </div>
                    <div className={cls.textItemL}></div>
                    <div className={cls.textItemM}></div>
                    <div className={cls.textItemS}></div>

                    <div className={cls.image}></div>

                    <div className={cls.btnWrapper}>
                        <div className={cls.btn}></div>
                        <div className={cls.btn}></div>
                    </div>
                </ContentContainer>
            }
        />
    )
}
