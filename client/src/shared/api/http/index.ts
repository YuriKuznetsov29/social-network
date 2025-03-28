import { AuthResponse } from '@/features/AuthByEmail/model/types/response/AuthResponse'
import axios from 'axios'

export const API_URL = __IS_DEV__ ? `http://localhost:8082/api` : `http://webdev.batgen.ru:8082/api`
export const SERVER_URL = __IS_DEV__ ? `http://localhost:8082/` : `http://webdev.batgen.ru:8082/`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
                const response = await axios.get<AuthResponse>(`${API_URL}/auth/token`, {
                    withCredentials: true,
                })
                localStorage.setItem('token', response.data.accessToken)
                return $api.request(originalRequest)
            } catch (e) {
                console.log('user in not autorized')
            }
        }
        throw error
    }
)

export default $api
