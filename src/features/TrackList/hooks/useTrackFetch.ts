import { useCallback, useState } from 'react'
import { getTracks } from '../../../api/track'
import useLoading from '../../../shared/hooks/useLoading'
import { err, ok } from 'neverthrow'
import type { SetCurrentPage, Track } from '@/types'
import type { RequestTracksData } from '../types/RequestTracksData'
import useFilter from '@/shared/hooks/useFilters'

interface Props {
  currentPage: number
  setCurrentPage: SetCurrentPage
}

const defaultFetchData = { data: [], totalPages: 1 }

function useTrackFetch({ currentPage, setCurrentPage }: Props) {
  const { filters } = useFilter()
  const [totalPages, setTotalPages] = useState<number>(0)
  const [list, setList] = useState<Track[]>([])
  const [listLoading, startListLoading] = useLoading()

  const requestTracks: () => Promise<RequestTracksData> =
    useCallback(async () => {
      const result = await startListLoading(getResultResponse)
      if (!result) return defaultFetchData
      return result.unwrapOr(defaultFetchData)
    }, [filters, currentPage, setCurrentPage, startListLoading])

  const getResultResponse = async () => {
    const result = await getTracks(filters, currentPage + 1)
    if (!result.isOk()) return err(result.error)
    const { data, meta } = result.value
    if (data.length === 0 && currentPage !== 0) {
      setCurrentPage(currentPage - 1)
    }
    return ok({ data, totalPages: meta.totalPages })
  }

  const fetchTracks = useCallback(async () => {
    const answer = await requestTracks()
    setList(answer.data)
    setTotalPages(answer.totalPages)
  }, [requestTracks, setList, setTotalPages])

  return { fetchTracks, list, listLoading, totalPages }
}

export default useTrackFetch
