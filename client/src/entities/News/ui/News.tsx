import classNames from 'classnames'
import { useEffect } from 'react'
import { Post } from 'entities/Post'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { getNewsList } from '../model/selectors/getNewsList'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { getNews } from '../model/services/getNews'
import { getNewsLoadingStatus } from '../model/selectors/getNewsLoadingStatus'
import { PostLoader } from 'shared/ui/PostLoader'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { newsReducer } from '../model/slice/newsSlice'
import { useTranslation } from 'react-i18next'
import cls from './News.module.scss'

interface NewsProps {
    className?: string
}

const initialReducers: ReducersList = {
    news: newsReducer,
}

export const News = ({ className }: NewsProps) => {
    const dispatch = useAppDispatch()
    const { t } = useTranslation()
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
                    : t('У вас пока нет новостей')}
            </div>
        </DynamicModuleLoader>
    )
}
