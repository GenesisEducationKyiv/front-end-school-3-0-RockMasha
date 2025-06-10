import type { Result } from 'neverthrow'
import type { RequestResponse } from '../api/responses/RequestResponse'
import type { AppError } from '../api/Error'

export function isRequestResponse<T>(
  value: unknown
): value is RequestResponse<T> {
  if (typeof value !== 'object' || value === null) return false

  const maybeResult = value as Partial<Result<T, AppError>>

  return (
    typeof maybeResult.isOk === 'function' &&
    typeof maybeResult.isErr === 'function' &&
    (maybeResult.isOk() || maybeResult.isErr())
  )
}
