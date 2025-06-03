import type {
  Filter,
  Id,
  NullableAbortController,
  RequestResponse,
  Slug,
  Track,
  TrackData,
  TrackListData,
} from '@/types'
import { api } from './axiosInstance'
import type { AxiosResponse } from 'axios'
import { ok } from 'neverthrow'
import { handleError } from '@/shared/helpers/handleError'

let TracksController: NullableAbortController = null
export async function getTracks(
  params: Filter = {},
  page: number = 1
): RequestResponse<TrackListData> {
  try {
    if (TracksController) {
      TracksController.abort()
    }
    TracksController = new AbortController()
    const answer: AxiosResponse<TrackListData> = await api.get('/api/tracks', {
      signal: TracksController.signal,
      params: { ...params, page },
    })
    TracksController = null
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function postTrack(data: TrackData): RequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.post(`/api/tracks`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function getTrackBySlug(slug: Slug): RequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.get(`/api/tracks/${slug}`)
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function redactTrack(
  data: TrackData,
  id: Id
): RequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.put(
      `/api/tracks/${id}`,
      data
    )
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function deleteTrack(id: Id): RequestResponse<''> {
  try {
    const answer: AxiosResponse<''> = await api.delete(`/api/tracks/${id}`)
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}
