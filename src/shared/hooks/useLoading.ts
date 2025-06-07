import { useCallback, useState } from 'react'
import { showError } from '../helpers/tosts/showError'
import type { StartLoadingFn } from '@/types'

function useLoading(): [boolean, StartLoadingFn]

function useLoading(startValue = false) {
  const [loading, setLoading] = useState<boolean>(startValue)
  const startLoading = useCallback(async (callbackFn: () => Promise<any>) => {
    setLoading(true)
    const result = await callbackFn()
    if (result && result.isErr() && result.error?.message !== 'canceled') {
      showError(result.error)
    }
    setLoading(false)
    return result
  }, [])

  return [loading, startLoading]
}

export default useLoading
