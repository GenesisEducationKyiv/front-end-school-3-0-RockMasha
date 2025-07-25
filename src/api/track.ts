import type {
  Filter,
  Id,
  NullableAbortController,
  AsyncRequestResponse,
  Slug,
  Track,
  TrackData,
  TrackListData,
} from '@/types'
import { api } from './axiosInstance'
import type { AxiosResponse } from 'axios'
import { ok } from 'neverthrow'
import { handleError } from '@/shared/helpers/handleError'

const ENDPOINT = '/api/tracks'

let TracksController: NullableAbortController = null
export async function getTracks(
  params: Filter = {},
  page: number = 1
): AsyncRequestResponse<TrackListData> {
  try {
    if (TracksController) {
      TracksController.abort()
    }
    TracksController = new AbortController()
    const answer: AxiosResponse<TrackListData> = await api.get(ENDPOINT, {
      signal: TracksController.signal,
      params: { ...params, page },
    })
    TracksController = null
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function postTrack(data: TrackData): AsyncRequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.post(ENDPOINT, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function getTrackBySlug(slug: Slug): AsyncRequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.get(`${ENDPOINT}/${slug}`)
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function redactTrack(
  data: TrackData,
  id: Id
): AsyncRequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.put(
      `${ENDPOINT}/${id}`,
      data
    )
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function deleteTrack(id: Id): AsyncRequestResponse<''> {
  try {
    const answer: AxiosResponse<''> = await api.delete(`${ENDPOINT}/${id}`)
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}
