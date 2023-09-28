import { io } from 'socket.io-client'
import { SERVER_URL } from '../shared/api/http'

export const socket = io(SERVER_URL, {
    autoConnect: false,
})
