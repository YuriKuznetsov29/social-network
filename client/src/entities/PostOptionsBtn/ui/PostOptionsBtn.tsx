import classNames from 'classnames'
import OptionsIcon from 'shared/assets/icons/options.svg'
import { useCallback, useEffect, useState } from 'react'
import { useAppSelector } from 'shared/lib/hook/useAppSelector'
import { getUserData } from 'entities/UserData'
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch'
import { useTranslation } from 'react-i18next'
import { removePost } from 'features/PostHandler'
import cls from './PostOptionsBtn.module.scss'
import { WhoLikesIt } from 'entities/WhoLikesIt/ui/WhoLikesIt'

interface PostOptionsBtnProps {
    className?: string
    postId: string
    author: string
}

export const PostOptionsBtn = ({ className, postId, author }: PostOptionsBtnProps) => {
    const [show, setShow] = useState(false)
    const { t } = useTranslation('pages')
    const dispatch = useAppDispatch()
    const userData = useAppSelector(getUserData)
    const [isOpenWhoLikes, setIsOpenWhoLikes] = useState(false)

    const onCloseModal = useCallback(() => {
        setIsOpenWhoLikes(false)
    }, [])

    const onShowModal = useCallback(() => {
        setIsOpenWhoLikes(true)
    }, [])

    const onClickToggleSetting = (e: React.MouseEvent) => {
        if (!(e.target as HTMLElement).closest('#container')) {
            setShow((prev) => !prev)
        }
    }

    useEffect(() => {
        const closeSearch = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest('#optionBtn')) {
                setShow(false)
            }
        }

        document.body.addEventListener<'click'>('click', closeSearch)

        return () => {
            document.body.removeEventListener<'click'>('click', closeSearch)
        }
    }, [])

    const onClickRemovePost = () => {
        dispatch(removePost({ postId }))
    }

    return (
        <div
            className={classNames(cls.PostOptionsBtn, {}, [className])}
            onClick={onClickToggleSetting}
            id="optionBtn"
        >
            <OptionsIcon className={cls.options} />

            <div className={classNames(cls.container, { [cls.active]: show }, [])} id="container">
                {userData?.userId === author && (
                    <span className={cls.btn} onClick={onClickRemovePost}>
                        {t('Удалить пост')}
                    </span>
                )}

                <span className={cls.btn} onClick={onShowModal}>
                    {t('Кому нравится')}
                </span>
            </div>

            <WhoLikesIt isOpen={isOpenWhoLikes} onClose={onCloseModal} />
        </div>
    )
}
