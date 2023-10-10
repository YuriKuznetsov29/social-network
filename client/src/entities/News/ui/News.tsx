import classNames from 'classnames'
import { useEffect, useState } from 'react'
import $api, { API_URL } from '../../../shared/api/http/index'
import { IPost } from 'features/PostHandler'
import { Post } from 'entities/Post'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { getNewsList } from '../model/selectors/getNewsList'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getNews } from '../model/services/getNews'
import { getNewsLoadingStatus } from '../model/selectors/getNewsLoadingStatus'
import { PostLoader } from 'shared/ui/PostLoader'
import cls from './News.module.scss'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { newsReducer } from '../model/slice/newsSlice'

interface NewsProps {
    className?: string
}

const initialReducers: ReducersList = {
    news: newsReducer,
}

export const News = ({ className }: NewsProps) => {
    const [posts, setPosts] = useState<IPost[]>([] as IPost[])

    const dispatch = useAppDispatch()

    const userData = useAppSelector(getUserData)
    const news = useAppSelector(getNewsList)
    const isLoading = useAppSelector(getNewsLoadingStatus)

    useEffect(() => {
        if (userData.friends) {
            dispatch(getNews({ friendList: userData.friends }))
        }
    }, [userData.friends])

    if (isLoading) {
        return <PostLoader />
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
            <div className={classNames(cls.News, {}, [className])}>
                {news && news.length
                    ? news.map((post) => <Post key={post._id} post={post} />)
                    : 'У вас пока нет новостей'}
            </div>
        </DynamicModuleLoader>
    )
}
