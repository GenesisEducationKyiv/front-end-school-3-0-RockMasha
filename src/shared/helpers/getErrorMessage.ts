import type { AppError, CustomAxiosError } from '@/types'
import { defaultErrorMessage } from '../consts/defaultErrorMessage'

export function getErrorMessage(error: CustomAxiosError): AppError {
  if (error.response?.data) {
    const errorData = error.response.data
    if (typeof errorData.error === 'string') {
      switch (errorData.error) {
        case 'A track with this title already exists':
          return { message: 'Track with some name already created' }
        default:
          return {
            message:
              typeof errorData.message === 'string'
                ? errorData.message
                : defaultErrorMessage,
          }
      }
    } else if (typeof errorData.message === 'string') {
      return { message: errorData.message }
    }
  }
  return { message: error.message || defaultErrorMessage }
}
