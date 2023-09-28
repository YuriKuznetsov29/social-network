import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../../app/Providers/StoreProvider/config/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
