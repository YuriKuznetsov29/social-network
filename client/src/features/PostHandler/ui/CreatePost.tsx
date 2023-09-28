import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import Plane from 'shared/assets/icons/paper-plane-right-bold.svg'
import Image from 'shared/assets/icons/image-bold.svg'
import { useEffect, useRef, useState } from 'react'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { createPost } from 'features/PostHandler/model/services/createPost'
import $api from '../../../shared/api/http/index'
import cls from './CreatePost.module.scss'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getAuthState } from 'features/AuthByEmail'
import { getUserData } from 'entities/UserData'

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

    const onClickCreatePost = () => {
        dispatch(
            createPost({ author: userData.userId, imagePath, text: input.current?.innerText || '' })
        )

        if (input.current?.innerText) {
            input.current.innerText = ''
            setImagePath('')
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

    return (
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
                    id="input-file"
                    type="file"
                    onChange={(e) => onChangeUploadImage(e)}
                />
                <label className={cls.classLabel} htmlFor="input-file">
                    <Image className={cls.image} />
                </label>

                <Plane className={cls.plane} onClick={onClickCreatePost} />
            </div>
        </ContentContainer>
    )
}
