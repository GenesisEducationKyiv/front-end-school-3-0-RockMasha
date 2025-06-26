import { handleError } from '@/shared/helpers/handleError'
import type { AsyncRequestResponse, Track } from '@/types'
import type { AxiosResponse } from 'axios'
import { api } from './axiosInstance'
import { ok } from 'neverthrow'
import { socket } from './socketInstance'

export async function getActiveTrack(): AsyncRequestResponse<Track> {
  try {
    const answer: AxiosResponse<Track> = await api.get('/api/active-track')
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export function listenToActiveTrackUpdates(callback: (track: Track) => void) {
  socket.on('activeTrack:updated', callback)
}

export function stopListeningToActiveTrackUpdates(
  callback: (track: Track) => void
) {
  socket.off('activeTrack:updated', callback)
}
