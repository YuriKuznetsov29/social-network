import classNames from 'classnames'
import cls from './Header.module.scss'
import Container from 'shared/ui/Container/Container'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { useAppDispatch } from 'app/Providers/StoreProvider/config/hooks'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'features/AuthByEmail'
import { FoundUsersList, searchUsersActions } from 'features/findUser'
import { useEffect, useState } from 'react'
import { MouseEvent } from 'react'

interface HeaderProps {
    className?: string
}

export const Header = ({ className }: HeaderProps) => {
    const [searchValue, setSearchValue] = useState('')

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onSignOut = () => {
        dispatch(signOut())
        navigate('/')
    }

    useEffect(() => {
        const name = searchValue.trim().split(' ')
        console.log(name)
        dispatch(searchUsersActions.setFirstName(name[0] || ''))
        dispatch(searchUsersActions.setLastName(name[1] || ''))
    }, [searchValue])

    const onChangeSearch = (value: string) => {
        setSearchValue(value)
    }

    return (
        <div className={cls.container}>
            <div className={classNames(cls.Header, {}, [className])}>
                <Container className={cls.contentContainer}>
                    <Input
                        className={cls.search}
                        placeholder="Поиск"
                        type="search"
                        value={searchValue}
                        onChange={onChangeSearch}
                    ></Input>
                    <Button className={cls.outBtn} onClick={onSignOut}>
                        Выйти
                    </Button>
                    <FoundUsersList className={cls.searchResults} />
                </Container>
            </div>
        </div>
    )
}
