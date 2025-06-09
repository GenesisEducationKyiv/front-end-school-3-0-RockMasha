import type { RequestResponse } from '@/types'
import { showError } from './tosts/showError'

export function getResultFromRequest<T>(data: RequestResponse<T>) {
  return data.match(
    (result) => result,
    (error) => {
      showError(error)
    }
  )
}
