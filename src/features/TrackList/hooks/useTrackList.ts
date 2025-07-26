import useTrackFetch from './useTrackFetch'
import useCurrentPage from './useCurrentPage'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectLoading } from '@/redux'

function useTrackList() {
  const loading = useSelector(selectLoading)
  const { currentPage, setCurrentPage } = useCurrentPage()

  const { fetchTracks, list, listLoading, totalPages } = useTrackFetch({
    currentPage,
    setCurrentPage,
  })

  useEffect(() => {
    fetchTracks()
  }, [currentPage, fetchTracks])

  useEffect(() => {
    if (loading === false) {
      fetchTracks()
    }
  }, [loading, fetchTracks])

  return {
    listLoading,
    list,
    currentPage,
    setCurrentPage,
    totalPages,
  }
}

export default useTrackList
