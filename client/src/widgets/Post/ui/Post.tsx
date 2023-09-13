import classNames from 'classnames'
import cls from './Post.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import { IPost } from 'features/PostHandler/model/types/post'
import { SERVER_URL } from '../../../http/index'

interface PostProps {
    className?: string
    post: IPost
}

function nl2br(str: string) {
    return { __html: str.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + `<br />`) }
}

export const Post = ({ className, post }: PostProps) => {
    function createMarkup() {
        return { __html: nl2br(post.text) }
    }

    console.log(post.text)

    return (
        <ContentContainer className={cls.container}>
            <div dangerouslySetInnerHTML={nl2br(post.text || '')} />
            {post.imagePath && (
                <img className={cls.image} src={SERVER_URL + post.imagePath} alt="image" />
            )}
        </ContentContainer>
    )
}
