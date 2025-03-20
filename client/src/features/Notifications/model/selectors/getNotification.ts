import { StateSchema } from '@/app/Providers/StoreProvider'

export const getNotification = (store: StateSchema) => store.notifications?.notification
