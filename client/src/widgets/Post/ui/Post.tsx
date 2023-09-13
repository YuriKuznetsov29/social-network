import classNames from 'classnames'
import cls from './Post.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { IPost } from 'features/PostHandler/model/types/post'
import $api, { API_URL, SERVER_URL } from '../../../http/index'
import { Button } from 'shared/ui/Button/Button'
import { useAppSelector } from 'app/Providers/StoreProvider/config/hooks'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'

interface PostProps {
    className?: string
    post: IPost
}

function nl2br(str: string) {
    return { __html: str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + `<br />`) }
}

export const Post = ({ className, post }: PostProps) => {
    const { userData } = useAppSelector(getAuthState)

    const onClickToggleLike = () => {
        $api.post(`${API_URL}/post/toggleLike`, {
            author: userData.userId,
            postId: post._id,
        })
    }

    return (
        <ContentContainer className={cls.container}>
            <div dangerouslySetInnerHTML={nl2br(post.text || '')} />
            {post.imagePath && (
                <img className={cls.image} src={SERVER_URL + post.imagePath} alt="image" />
            )}
            <div className={cls.btnContainer}>
                <div>{post.likes}</div>
                <Button onClick={onClickToggleLike}>Like</Button>
            </div>
        </ContentContainer>
    )
}
