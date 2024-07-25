import { StateSchema } from '@/app/Providers/StoreProvider'
import { RootState } from '@/app/Providers/StoreProvider/config/store'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
