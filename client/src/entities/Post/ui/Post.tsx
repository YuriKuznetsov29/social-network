import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { IPost } from 'features/PostHandler/model/types/post'
import { SERVER_URL } from '../../../shared/api/http/index'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import dayjs from 'dayjs'
import { IUser } from 'entities/UserData/model/types/IUser'
import { Avatar } from 'entities/Avatar'
import { transformText } from '../model/services/transformText/transformText'
import { useTranslation } from 'react-i18next'
import { getUserDataById } from 'shared/api/getUserDataById'
import { ImageModal } from 'shared/ui/ImageModal/ImageModal'
import { PostOptionsBtn } from 'entities/PostOptionsBtn'
import { PostFooter } from './PostFooter'
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
            <ContentContainer className={cls.container}>
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
