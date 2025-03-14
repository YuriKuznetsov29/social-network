import { ThunkConfig } from '@/app/Providers/StoreProvider/config/StateSchema'
import { notificationsActions } from '@/features/Notifications'
import { getFeatureFlag } from '@/shared/lib/features/lib/setGetFeatures'
import { setNotification } from '@/shared/lib/features/lib/setNotification'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { TFunction } from 'i18next'

import { API_URL } from '../../../../../shared/api/http/index'
import { AuthResponse } from '../../types/response/AuthResponse'

export interface RequestChangeData {
    firstName: string
    lastName: string
    email: string
    gender: 'male' | 'female' | ''
    birthDay: string
    userId: string
    city: string
    t?: TFunction<'authForms', undefined>
}

export const changeUserData = createAsyncThunk<
    AuthResponse,
    RequestChangeData,
    ThunkConfig<string>
>(
    'user/changeUserData',
    async (
        { firstName, lastName, email, gender, birthDay, userId, city, t },
        { rejectWithValue, dispatch, extra }
    ) => {
        try {
            const response = await extra.api.patch<AuthResponse>(
                `${API_URL}/user/${userId}/update`,
                {
                    firstName,
                    lastName,
                    email,
                    gender,
                    birthDay,
                    city,
                }
            )

            if (t) {
                if (getFeatureFlag('isAppRedesigned')) {
                    setNotification(
                        t(`Вы успешно обновили данные`),
                        {
                            position: 'top-right',
                        },
                        'success'
                    )
                } else {
                    dispatch(notificationsActions.setNotification(t(`Вы успешно обновили данные`)))
                }
            }
            return response.data
        } catch (e: unknown) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
