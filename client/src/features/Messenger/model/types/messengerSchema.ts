import { EntityState } from '@reduxjs/toolkit'

import { Dialog } from './dialog'

export interface MessengerSchema extends EntityState<Dialog> {
    // dialogs: Dialog[]
    isLoading?: boolean
    error?: string
}
