import { handleError } from '@/shared/helpers/handleError'
import type { AsyncRequestResponse, Track } from '@/types'
import type { AxiosResponse } from 'axios'
import { api } from './axiosInstance'
import { ok } from 'neverthrow'
import { socket } from './socketInstance'

const ENDPOINT = '/api/active-track'
const ACTIVE_TRACK_UPDATED_EVENT = 'activeTrack:updated'

export async function getActiveTrack(): AsyncRequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.get(ENDPOINT)
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

type TrackCallback = (track: Track) => void

export function listenToActiveTrackUpdates(callback: TrackCallback) {
  socket.on(ACTIVE_TRACK_UPDATED_EVENT, callback)
}

export function stopListeningToActiveTrackUpdates(callback: TrackCallback) {
  socket.off(ACTIVE_TRACK_UPDATED_EVENT, callback)
}
