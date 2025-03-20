import { Avatar } from '@/entities/Avatar'
import { transformText } from '@/entities/Post/model/services/transformText/transformText'
import { IUser } from '@/entities/UserData/model/types/IUser'
import { IPost } from '@/features/PostHandler/model/types/post'
import { getUserDataById } from '@/shared/api/getUserDataById'
import { SERVER_URL } from '@/shared/api/http'
import { ContentContainer } from '@/shared/ui/ContentContainer/ContentContainer'
import { ImageModal } from '@/shared/ui/ImageModal/ImageModal'
import dayjs from 'dayjs'
import { memo, useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { PostFooter } from '../../PostFooter/PostFooter'
import { PostOptionsBtn } from '../../PostOptionsBtn/PostOptionsBtn'
import cls from './Post.module.scss'

interface PostProps {
    post: IPost
}

export const Post = memo(({ post }: PostProps) => {
    const [author, setAuthor] = useState<IUser | null>(null)
    const [isOpenImage, setIsOpenImage] = useState(false)

    const { t, i18n } = useTranslation('pages')

    const onCloseModal = useCallback(() => {
        setIsOpenImage(false)
    }, [])

    const onShowModal = () => {
        setIsOpenImage(true)
    }

    useEffect(() => {
        getUserDataById(post.author)
            .then((companion) => {
                if (companion) setAuthor(companion)
            })
            .catch(console.log)
    }, [])

    return (
        <>
            <ContentContainer data-testid="post" className={cls.container}>
                <div className={cls.authorContainer}>
                    <Avatar
                        avatarPath={author?.avatarPath}
                        className={cls.avatar}
                        size="M"
                        click
                        userId={author?.userId}
                    />
                    <div className={cls.headerContainer}>
                        <div className={cls.authorWrapper}>
                            <div>
                                {author?.firstName} {author?.lastName}
                            </div>
                            <div className={cls.time}>
                                {dayjs(post.date).locale(i18n.language).toNow(true) + t(' назад')}
                            </div>
                        </div>
                        <PostOptionsBtn postId={post._id} author={post.author} />
                    </div>
                </div>
                <div className={cls.contentContainer}>
                    <div
                        data-testid="post-text"
                        className={cls.text}
                        dangerouslySetInnerHTML={transformText(post.text || '')}
                    />
                    {post.imagePath && (
                        <>
                            <img
                                className={cls.image}
                                src={SERVER_URL + post.imagePath}
                                alt="image"
                                onClick={onShowModal}
                            />
                            <ImageModal
                                imagePath={post.imagePath}
                                isOpen={isOpenImage}
                                onClose={onCloseModal}
                            />
                        </>
                    )}
                </div>
                <PostFooter post={post} />
            </ContentContainer>
        </>
    )
})
