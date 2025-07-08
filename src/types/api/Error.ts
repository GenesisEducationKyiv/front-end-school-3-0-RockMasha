import type { AxiosError, AxiosResponse } from 'axios'

export interface ApiErrorData {
  error?: string | unknown
  message?: string
}

export interface AppError {
  message: string
  details?: ApiErrorData
}

export interface CustomAxiosError extends AxiosError<ApiErrorData> {
  response?: AxiosResponse<ApiErrorData>
}

