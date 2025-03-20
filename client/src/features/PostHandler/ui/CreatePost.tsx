import { getUserData } from '@/entities/UserData'
import { notificationsActions } from '@/features/Notifications'
import { createPost } from '@/features/PostHandler/model/services/createPost'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { getFeatureFlag } from '@/shared/lib/features/lib/setGetFeatures'
import { setNotification } from '@/shared/lib/features/lib/setNotification'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { CreatePostLoader } from '@/shared/ui/CreatePostLoader'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import SendIcon from '@mui/icons-material/Send'
import { Box, IconButton, Paper, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import $api, { API_URL } from '../../../shared/api/http/index'
import { getInitPostStatus } from '../model/selectors/getInitPostStatus'
import { CreatePost as CreatePostDeprecated } from './deprecated/CreatePost'

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
})

interface uploadImageResponse {
    imagePath: string
}

export const CreatePost = () => {
    const [postText, setPostText] = useState('')
    const [imagePath, setImagePath] = useState('')
    const { t } = useTranslation('pages')

    const dispatch = useAppDispatch()
    const userData = useAppSelector(getUserData)
    const init = useAppSelector(getInitPostStatus)

    const onClickCreatePost = () => {
        if (postText.trim() !== '' || imagePath) {
            dispatch(
                createPost({
                    author: userData.userId,
                    imagePath,
                    text: postText,
                    t,
                })
            )
            setImagePath('')
            setPostText('')
        } else {
            if (getFeatureFlag('isAppRedesigned')) {
                setNotification(
                    'Пост должен содержать текст или фото',
                    {
                        position: 'bottom-right',
                    },
                    'error'
                )
            } else {
                dispatch(
                    notificationsActions.setNotification(t('Пост должен содержать текст или фото'))
                )
            }
        }
    }

    const onChangeUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]

        const formData = new FormData()
        if (file instanceof File) {
            formData.append('file', file)
        }

        try {
            const response = await $api.post<uploadImageResponse>(
                `${API_URL}/file/uploadImage`,
                formData
            )

            setImagePath(response.data.imagePath)
        } catch (e: unknown) {
            console.log(e)
        }
    }

    if (!init) return <CreatePostLoader />

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
                    <TextField
                        placeholder={t('Что у вас нового?')}
                        multiline
                        maxRows={4}
                        fullWidth
                        value={postText}
                        onChange={(e) => setPostText(e.target.value)}
                    />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            gap: 2,
                        }}
                    >
                        <IconButton component="label">
                            <AddPhotoAlternateIcon />
                            <VisuallyHiddenInput
                                type="file"
                                onChange={(e) => onChangeUploadImage(e)}
                            />
                        </IconButton>
                        <IconButton onClick={onClickCreatePost}>
                            <SendIcon />
                        </IconButton>
                    </Box>
                </Paper>
            }
            off={<CreatePostDeprecated />}
        />
    )
}
