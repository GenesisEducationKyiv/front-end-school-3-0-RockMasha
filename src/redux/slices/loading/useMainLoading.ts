import { useCallback } from 'react'
import { showError } from '@/shared/helpers/tosts/showError'
import { isRequestResponse } from '@/types/guards/isRequestResponse'
import type { StartLoadingFn } from '@/types'
import { useDispatch } from 'react-redux'
import { actionEndLoading, actionStartLoading } from './loadingSlice'

function useMainLoading(): StartLoadingFn {
  const dispatch = useDispatch()
  const startLoading = useCallback(
    async <R>(callbackFn: () => Promise<R>): Promise<R | undefined> => {
      try {
        dispatch(actionStartLoading())
        const result = await callbackFn()
        if (isRequestResponse(result)) {
          if (result.isErr() && result.error.message !== 'canceled') {
            showError(result.error)
          }
        }
        return result
      } catch {
        showError()
        return
      } finally {
        dispatch(actionEndLoading())
      }
    },
    []
  )

  return startLoading
}

export default useMainLoading
