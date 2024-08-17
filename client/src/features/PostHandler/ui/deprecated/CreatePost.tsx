import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import Plane from '@/shared/assets/icons/paper-plane-right-bold.svg'
import Image from '@/shared/assets/icons/image-bold.svg'
import { useRef, useState } from 'react'
import { useAppDispatch } from '@/shared/lib/hook/useAppDispatch'
import { createPost } from '@/features/PostHandler/model/services/createPost'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { getUserData } from '@/entities/UserData'
import { notificationsActions } from '@/features/Notifications'
import { CreatePostLoader } from '@/shared/ui/CreatePostLoader'
import { useTranslation } from 'react-i18next'
import cls from './CreatePost.module.scss'
import { getInitPostStatus } from '../../model/selectors/getInitPostStatus'
import $api, { API_URL } from '@/shared/api/http'

interface uploadImageResponse {
    imagePath: string
}

export const CreatePost = () => {
    const [imagePath, setImagePath] = useState('')
    const input = useRef<HTMLInputElement | null>(null)
    const { t } = useTranslation('pages')

    const dispatch = useAppDispatch()
    const userData = useAppSelector(getUserData)
    const init = useAppSelector(getInitPostStatus)

    const onClickCreatePost = () => {
        if (input.current?.innerText.trim() !== '' || imagePath) {
            dispatch(
                createPost({
                    author: userData.userId,
                    imagePath,
                    text: input.current?.innerText || '',
                    t,
                })
            )
            setImagePath('')
            if (input.current?.innerText) {
                input.current.innerText = ''
            }
        } else {
            dispatch(
                notificationsActions.setNotification(t('Пост должен содержать текст или фото'))
            )
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
        <>
            <ContentContainer className={cls.container}>
                <div
                    className={cls.area}
                    contentEditable
                    aria-multiline
                    role="textbox"
                    data-placeholder={t('Что у вас нового?')}
                    ref={input}
                    data-testid="post-input"
                ></div>
                <div className={cls.buttonContainer}>
                    <input
                        className={cls.input_file}
                        accept="image/*"
                        id="input-file"
                        type="file"
                        onChange={(e) => onChangeUploadImage(e)}
                    />
                    <label className={cls.classLabel} htmlFor="input-file">
                        {imagePath && <div className={cls.imageText}>Изображение прикреплено</div>}
                        <Image className={cls.image} />
                    </label>
                    <Plane data-testid="send" className={cls.plane} onClick={onClickCreatePost} />
                </div>
            </ContentContainer>
        </>
    )
}
