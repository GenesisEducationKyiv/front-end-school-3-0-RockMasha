import toast from 'react-hot-toast'
import { defaultErrorMessage } from '../../consts/defaultErrorMessage'
import type { AppError } from '@/types'

export const showError = (error?: AppError): void => {
  const text = error?.message || defaultErrorMessage
  toast.error(text)
}
