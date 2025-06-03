import type { AppError, Genre } from '@/types'
import { api } from './axiosInstance'
import type { AxiosResponse } from 'axios'
import { handleError } from '@/shared/helpers/handleError'
import { ok, Result } from 'neverthrow'

async function getGenres(): Promise<Result<Genre[], AppError>> {
  try {
    const answer: AxiosResponse<Genre[]> = await api.get('/api/genres')
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
