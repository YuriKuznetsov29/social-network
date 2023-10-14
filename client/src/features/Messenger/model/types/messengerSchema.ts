import { Dialog } from './dialog'

export interface MessengerSchema {
    dialogs: Dialog[]
    isLoading: boolean
    error?: string
}
