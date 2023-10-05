import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import Plane from 'shared/assets/icons/paper-plane-right-bold.svg'
import Image from 'shared/assets/icons/image-bold.svg'
import { useRef, useState } from 'react'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { createPost } from 'features/PostHandler/model/services/createPost'
import $api from '../../../shared/api/http/index'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import cls from './CreatePost.module.scss'
import { notificationsActions } from 'features/Notifications'
import { CreatePostLoader } from 'shared/ui/CreatePostLoader'
import { getPostLoadingStatus } from '../model/selectors/getPostLoadingStatus'
import { getInitPostStatus } from '../model/selectors/getInitPostStatus'

interface CreatePostProps {
    className?: string
}

interface uploadImageResponse {
    imagePath: string
}

export const CreatePost = ({ className }: CreatePostProps) => {
    const [imagePath, setImagePath] = useState('')
    const input = useRef<HTMLInputElement | null>(null)

    const dispatch = useAppDispatch()
    const userData = useAppSelector(getUserData)
    const loading = useAppSelector(getPostLoadingStatus)
    const init = useAppSelector(getInitPostStatus)

    const onClickCreatePost = () => {
        if (input.current?.innerText.trim() !== '' || imagePath) {
            dispatch(
                createPost({
                    author: userData.userId,
                    imagePath,
                    text: input.current?.innerText || '',
                })
            )
            setImagePath('')
            if (input.current?.innerText) {
                input.current.innerText = ''
            }
        } else {
            dispatch(notificationsActions.setNotification(`Пост должен содержать текст или фото`))
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
                `http://localhost:8080/api/file/uploadImage`,
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
                    data-placeholder="Что у вас нового?"
                    ref={input}
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

                    <Plane className={cls.plane} onClick={onClickCreatePost} />
                </div>
            </ContentContainer>
            {/* <CreatePostLoader /> */}
        </>
    )
}
