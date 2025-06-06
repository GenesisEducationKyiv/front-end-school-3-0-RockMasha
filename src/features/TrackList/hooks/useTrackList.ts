import { useLoaderProviderContext } from '../../../context/LoaderProvider'
import useTrackFetch from './useTrackFetch'
import useCurrentPage from './useCurrentPage'
import { useEffect } from 'react'

function useTrackList() {
  const { loading } = useLoaderProviderContext()
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
