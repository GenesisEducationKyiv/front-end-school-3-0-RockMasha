import type { Result } from 'neverthrow'
import type { AppError } from '../Error'

export type RequestResponse<T> = Promise<Result<T, AppError>>
