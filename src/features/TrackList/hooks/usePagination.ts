import type { SetCurrentPage } from '@/types'
import { useEffect, useState } from 'react'

type PaginationEvent = { selected: number }

function usePagination(setCurrentPage: SetCurrentPage) {
  const [isPhone, setIsPhone] = useState<boolean>(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handlePageClick = (event: PaginationEvent) => {
    setCurrentPage(event.selected)
  }

  return { isPhone, handlePageClick }
}

export default usePagination
