import classNames from 'classnames'
import { useEffect } from 'react'
import { Post } from 'entities/Post'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { getNewsList } from '../model/selectors/getNewsList'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { fetchNews } from '../model/services/fetchNews'
import { getNewsLoadingStatus } from '../model/selectors/getNewsLoadingStatus'
import { PostLoader } from 'shared/ui/PostLoader'
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { newsReducer } from '../model/slice/newsSlice'
import { useTranslation } from 'react-i18next'
import cls from './News.module.scss'
import { getNewsInitialized } from '../model/selectors/getNewsInitialized'

interface NewsProps {
    className?: string
}

const initialReducers: ReducersList = {
    news: newsReducer,
}

export const News = ({ className }: NewsProps) => {
    const { t } = useTranslation()
    const news = useAppSelector(getNewsList)
    const isLoading = useAppSelector(getNewsLoadingStatus)
    const initialized = useAppSelector(getNewsInitialized)

    if (isLoading && !initialized) {
        return <PostLoader />
    }

    return (
        // <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
        <div className={classNames(cls.News, {}, [className])}>
            {news && news.length
                ? news.map((post) => <Post key={post._id} post={post} />)
                : t('У вас пока нет новостей')}
        </div>
        // </DynamicModuleLoader>
    )
}
