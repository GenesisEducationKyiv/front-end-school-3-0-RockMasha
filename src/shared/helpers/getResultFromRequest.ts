import type { AppError } from '@/types'
import type { Result } from 'neverthrow'
import { showError } from './tosts/showError'

export function getResultFromRequest<T>(data: Result<T, AppError>) {
  return data.match(
    (result) => result,
    (error) => {
      showError(error)
    }
  )
}
