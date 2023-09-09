import cls from './MessengerPage.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
import { Input } from 'shared/ui/Input/Input'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import Container from 'shared/ui/Container/Container'
import { Header } from 'widgets/Header'
import { SideBar } from 'widgets/SideBar'
import { Messenger } from 'features/Messenger'

export const MessengerPage = () => {
    return (
        <>
            <Header />
            <Container>
                <SideBar />
                <div style={{ width: '100%' }}>
                    <Messenger />

                    {/* <ContentContainer className={cls.contentContainer}>
                        <Input placeholder="Поиск" className={cls.inputSearch} />
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                        <AppLink to={'/messenger/1'}>
                            <div className={cls.dialog}>
                                <User className={cls.avatar} />
                                <div className={cls.dialogData}>
                                    <div>
                                        <div>Имя Фамилия</div>
                                        <div>Сообщение</div>
                                    </div>
                                    <div>20:52</div>
                                </div>
                            </div>
                        </AppLink>
                    </ContentContainer> */}
                </div>
            </Container>
        </>
    )
}
