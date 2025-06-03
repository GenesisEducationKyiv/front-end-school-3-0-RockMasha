import type { FileData, Id, RequestResponse } from '@/types'
import { api } from './axiosInstance'
import { type AxiosResponse } from 'axios'
import { ok } from 'neverthrow'
import { handleError } from '@/shared/helpers/handleError'

export async function getFile(name: string): RequestResponse<ArrayBuffer> {
  try {
    const answer: AxiosResponse<ArrayBuffer> = await api.get(
      `/api/files/${name}`,
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
): RequestResponse<FileData> {
  try {
    const answer: AxiosResponse<FileData> = await api.post(
      `/api/tracks/${id}/upload`,
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

export async function deleteFile(id: Id): RequestResponse<FileData> {
  try {
    const answer: AxiosResponse<FileData> = await api.delete(
      `/api/tracks/${id}/file`
    )
    return ok(answer.data)
  } catch (error) {
    return handleError(error)
  }
}
