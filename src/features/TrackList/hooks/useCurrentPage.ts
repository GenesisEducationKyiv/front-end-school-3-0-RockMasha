import { useCallback, useEffect, useState } from 'react'
import useFilter from '@/shared/hooks/useFilters'

function useCurrentPage() {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const { filters } = useFilter()

  const resetCurrentPage = useCallback(() => {
    setCurrentPage(0)
  }, [])

  useEffect(() => {
    resetCurrentPage()
  }, [filters, resetCurrentPage])

  return {
    currentPage,
    setCurrentPage,
    resetCurrentPage,
  }
}

export default useCurrentPage
