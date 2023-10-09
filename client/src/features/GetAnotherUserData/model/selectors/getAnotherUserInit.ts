import { StateSchema } from 'app/Providers/StoreProvider'

export const getAnotherUserInit = (state: StateSchema) => state.anotherUser?._initialized
