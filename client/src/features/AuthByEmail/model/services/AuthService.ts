import { AuthResponse } from 'features/AuthByEmail/model/types/response/AuthResponse'
import $api from '../../../../http/index'
import { AxiosResponse } from 'axios'
import { RequestAuthData } from './signUpByEmail'

export class AuthService {
    static async signIn(
        email: string,
        password: string
    ): Promise<AxiosResponse<AuthResponse, any>> {
        return $api.post<AuthResponse>('/auth/signInWithPassword', { email, password })
    }

    static async signUp(authData: RequestAuthData): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/auth/signUp', { ...authData })
    }

    static async signOut(): Promise<void> {
        return $api.post('/auth/signOut')
    }
}
