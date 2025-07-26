import type { Genre, AsyncRequestResponse } from '@/types'
import { api } from './axiosInstance'
import type { AxiosResponse } from 'axios'
import { handleError } from '@/shared/helpers/handleError'
import { ok } from 'neverthrow'

const ENDPOINT = '/api/genres'

async function getGenres(): AsyncRequestResponse<Genre[]> {
  try {
    const answer: AxiosResponse<Genre[]> = await api.get(ENDPOINT)
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

async function getList(): Promise<Genre[]> {
  const result = await getGenres()
  return result.match(
    (genres) => genres,
    () => []
  )
}

export const genres = await getList()
