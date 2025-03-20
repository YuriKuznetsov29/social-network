import { Post } from '@/entities/Post'
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures'
import { useAppSelector } from '@/shared/lib/hook/useAppSelector'
import { PostLoader } from '@/shared/ui/PostLoader'
import { Stack } from '@mui/material'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'

import { getNewsInitialized } from '../model/selectors/getNewsInitialized'
import { getNewsList } from '../model/selectors/getNewsList'
import { getNewsLoadingStatus } from '../model/selectors/getNewsLoadingStatus'
import { newsReducer } from '../model/slice/newsSlice'
import cls from './News.module.scss'

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Stack spacing={2}>
                    {news && news.length
                        ? news.map((post) => <Post key={post._id} post={post} />)
                        : t('У вас пока нет новостей')}
                </Stack>
            }
            off={
                // <DynamicModuleLoader removeAfterUnmount reducers={initialReducers}>
                <div data-testid="news" className={classNames(cls.News, {}, [className])}>
                    {news && news.length
                        ? news.map((post) => <Post key={post._id} post={post} />)
                        : t('У вас пока нет новостей')}
                </div>
                // </DynamicModuleLoader>
            }
        />
    )
}
