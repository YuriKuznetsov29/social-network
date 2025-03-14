import { StateSchema } from '@/app/Providers/StoreProvider'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector
