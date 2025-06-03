import { err, Result } from 'neverthrow'
import { isAxiosError } from 'axios'
import type { AppError } from '@/types'
import getErrorMessage from './getErrorMessage'
import { unexpectedErrorMessage } from '../consts/unexpectedErrorMessage'

export function handleError<T>(error: unknown): Result<T, AppError> {
  if (isAxiosError(error)) {
    return err(getErrorMessage(error))
  }
  return err({ message: unexpectedErrorMessage })
}
