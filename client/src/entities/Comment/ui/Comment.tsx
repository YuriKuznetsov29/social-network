import { IUser } from '@/entities/UserData/model/types/IUser'
import { IComment } from '@/features/PostHandler/model/types/comment'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { SERVER_URL } from '@/shared/api/http'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Comment as CommentDeprecated } from './deprecated/Comment'

interface CommentProps {
    className?: string
    comment: IComment
}

export const Comment = ({ comment }: CommentProps) => {
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
                        <Box
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography variant="body2">
                                {`${userData?.firstName} ${userData?.lastName}`}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {dayjs(comment.createdAt).locale(i18n.language).toNow(true) +
                                    t(' назад')}
                            </Typography>
                        </Box>
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
