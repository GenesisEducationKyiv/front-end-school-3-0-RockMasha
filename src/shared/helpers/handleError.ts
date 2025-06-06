import { err } from 'neverthrow'
import { isAxiosError } from 'axios'
import type { RequestResponse } from '@/types'
import getErrorMessage from './getErrorMessage'
import { unexpectedErrorMessage } from '../consts/unexpectedErrorMessage'

export function handleError<T>(error: unknown): RequestResponse<T> {
  if (isAxiosError(error)) {
    return err(getErrorMessage(error))
  }
  return err({ message: unexpectedErrorMessage })
}
