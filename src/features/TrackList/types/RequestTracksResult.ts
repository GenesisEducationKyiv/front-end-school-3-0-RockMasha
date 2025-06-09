import type { AppError } from '@/types'
import type { Result } from 'neverthrow'
import type { RequestTracksData } from './RequestTracksData'

export type RequestTracksResult = Result<RequestTracksData, AppError>
