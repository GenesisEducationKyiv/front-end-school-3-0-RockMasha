import { useCallback, useState } from 'react'
import { useFiltersValueContext } from '../../../context/FiltersProvider'
import { getTracks } from '../../../api/track'
import useLoading from '../../../shared/hooks/useLoading'
import { err, ok } from 'neverthrow'
import type { SetCurrentPage, Track } from '@/types'
import type { RequestTracksData } from '../types/RequestTracksData'

interface Props {
  currentPage: number
  setCurrentPage: SetCurrentPage
}

function useTrackFetch({ currentPage, setCurrentPage }: Props) {
  const filters = useFiltersValueContext()
  const [totalPages, setTotalPages] = useState<number>(0)
  const [list, setList] = useState<Track[]>([])
  const [listLoading, startListLoading] = useLoading()

  const requestTracks: () => Promise<RequestTracksData | undefined> =
    useCallback(async () => {
      const result = await startListLoading(getResultResponse)
      if (!result || result.isErr()) return
      return result.value
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
    setList(answer ? answer.data : [])
    setTotalPages(answer ? answer.totalPages : 0)
  }, [requestTracks, setList, setTotalPages])

  return { fetchTracks, list, listLoading, totalPages }
}

export default useTrackFetch
