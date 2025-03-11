import { type } from 'os'
import toast, { ToastOptions } from 'react-hot-toast'

type ToastType = 'success' | 'error' | 'loading' | 'blank' | 'custom'
export const setNotification = (message: string, options?: ToastOptions, type?: ToastType) => {
    const theme = localStorage.getItem('theme') !== null ? localStorage.getItem('theme') : 'dark'

    const toastOptions: ToastOptions = {
        style:
            theme === 'dark'
                ? {
                      background: '#333',
                      color: '#fff',
                  }
                : {
                      background: '#fff',
                      color: '#000',
                  },
        duration: 3000,
        ...options,
    }

    switch (type) {
        case 'success':
            toast.success(message, toastOptions)
            break
        case 'error':
            toast.error(message, toastOptions)
            break
        case 'success':
            toast.success(message, toastOptions)
            break
        case 'blank':
            toast.success(message, toastOptions)
            break
        default:
            toast(message, toastOptions)
            break
    }
}
