import classNames from 'classnames'
import { IComment } from '@/features/PostHandler/model/types/comment'
import { useEffect, useState } from 'react'
import { IUser } from '@/entities/UserData/model/types/IUser'
import dayjs from 'dayjs'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { useTranslation } from 'react-i18next'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Comment as CommentDeprecated } from './deprecated/Comment'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { SERVER_URL } from '@/shared/api/http'
import { red } from '@mui/material/colors'

interface CommentProps {
    className?: string
    comment: IComment
}

export const Comment = ({ className, comment }: CommentProps) => {
    const [userData, setUserData] = useState<IUser | null>(null)

    const { t, i18n } = useTranslation('pages')

    useEffect(() => {
        getUserDataById(comment.author)
            .then((user) => {
                if (user) setUserData(user)
            })
            .catch(console.log)
    }, [])

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Stack spacing={1} key={comment._id}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            gap: 2,
                        }}
                    >
                        <Avatar
                            src={SERVER_URL + userData?.avatarPath}
                            sx={{ bgcolor: red[500] }}
                            alt={userData?.firstName}
                        />
                        <Stack>
                            <Typography variant="body2">
                                {`${userData?.firstName} ${userData?.lastName}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {dayjs(comment.createdAt).locale(i18n.language).toNow(true) +
                                    t(' назад')}
                            </Typography>
                        </Stack>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {comment.body}
                    </Typography>
                </Stack>
            }
            off={<CommentDeprecated comment={comment} />}
        />
    )
}
