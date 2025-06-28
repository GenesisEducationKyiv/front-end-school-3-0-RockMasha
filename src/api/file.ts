import type { FileData, Id, AsyncRequestResponse } from '@/types'
import { api } from './axiosInstance'
import { type AxiosResponse } from 'axios'
import { ok } from 'neverthrow'
import { handleError } from '@/shared/helpers/handleError'

export const ENDPOINTS = {
  GET_FILE: (name: string) => `/api/files/${name}`,
  POST_FILE: (id: string | number) => `/api/tracks/${id}/upload`,
  DELETE_FILE: (id: string | number) => `/api/tracks/${id}/file`,
}

export async function getFile(name: string): AsyncRequestResponse<ArrayBuffer> {
  try {
    const answer: AxiosResponse<ArrayBuffer> = await api.get(
      ENDPOINTS.GET_FILE(name),
      {
        responseType: 'arraybuffer',
      }
    )
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function postFile(
  data: FileData,
  id: Id
): AsyncRequestResponse<FileData> {
  try {
    const answer: AxiosResponse<FileData> = await api.post(
      ENDPOINTS.POST_FILE(id),
      data,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    )
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}

export async function deleteFile(id: Id): AsyncRequestResponse<FileData> {
  try {
    const answer: AxiosResponse<FileData> = await api.delete(
      ENDPOINTS.DELETE_FILE(id)
    )
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}
