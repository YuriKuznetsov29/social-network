import cls from './MessengerPage.module.scss'
import { ContentContainer } from 'shared/ui/ContentContainer/ContentContainer'
import User from 'shared/assets/icons/user.svg'
import Arrow from 'shared/assets/icons/caret-left-bold.svg'
import { Input } from 'shared/ui/Input/Input'
import { Button } from 'shared/ui/Button/Button'
import { Dialog } from 'widgets/Dialog'
import { Outlet } from 'react-router-dom'
import { AppLink } from 'shared/ui/AppLink/AppLink'

export const MessengerPage = () => {
    return (
        <div style={{ width: '100%' }}>
            <ContentContainer className={cls.contentContainer}>
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
            </ContentContainer>
        </div>
    )
}
