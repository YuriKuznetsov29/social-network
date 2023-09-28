import classNames from 'classnames'
import cls from './News.module.scss'
import { useEffect, useState } from 'react'
import $api, { API_URL } from '../../../shared/api/http/index'
import { getAuthState } from 'features/AuthByEmail/model/selectors/getAuthState/getAuthState'
import { IPost } from 'features/PostHandler'
import { Post } from 'entities/Post'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'

interface NewsProps {
    className?: string
}

export const News = ({ className }: NewsProps) => {
    const [posts, setPosts] = useState<IPost[] | null>(null)

    const userData = useAppSelector(getUserData)

    useEffect(() => {
        const getUserDataById = async () => {
            try {
                const response = await $api.post(`${API_URL}/post/getNews`, {
                    usersList: userData.friends,
                })

                console.log(response.data)
                setPosts(response.data.posts)
            } catch (e) {
                console.log(e)
            }
        }

        getUserDataById()
    }, [])
    return (
        <div className={classNames(cls.News, {}, [className])}>
            {posts
                ? posts.map((post) => <Post key={post._id} post={post} />)
                : 'У вас пока нет новостей'}
        </div>
    )
}
