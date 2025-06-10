import { useCallback, useState } from 'react'
import { showError } from '../helpers/tosts/showError'
import { isRequestResponse } from '@/types/guards/isRequestResponse'
import type { StartLoadingFn } from '@/types'

function useLoading<T>(): [boolean, StartLoadingFn]

function useLoading(startValue = false) {
  const [loading, setLoading] = useState<boolean>(startValue)

  const startLoading = useCallback(
    async <R>(callbackFn: () => Promise<R>): Promise<R | undefined> => {
      try {
        setLoading(true)
        const result = await callbackFn()
        if (isRequestResponse(result)) {
          if (result.isErr() && result.error.message !== 'canceled') {
            showError(result.error)
          }
        }
        return result
      } catch (error) {
        showError()
        return
      } finally {
        setLoading(false)
      }
    },
    []
  )

  return [loading, startLoading] as const
}

export default useLoading
