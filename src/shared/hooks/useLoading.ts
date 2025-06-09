import { useCallback, useState } from 'react'
import { showError } from '../helpers/tosts/showError'
import type { AppError, RequestResponse, StartLoadingFn } from '@/types'

function isAppError(error: unknown): error is AppError {
  return typeof error === 'object' && error !== null && 'message' in error
}

function useLoading(startValue = false): [boolean, StartLoadingFn] {
  const [loading, setLoading] = useState<boolean>(startValue)

  const startLoading = useCallback(
    async <T>(callbackFn: () => Promise<RequestResponse<T> | void>) => {
      try {
        setLoading(true)
        const result = await callbackFn()
        if (result?.isErr() && result.error.message !== 'canceled') {
          showError(result.error)
        }
        return result
      } catch (error: unknown) {
        if (isAppError(error) && error.message !== 'canceled') {
          showError(error)
        }
        return undefined
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return [loading, startLoading]
}

export default useLoading
