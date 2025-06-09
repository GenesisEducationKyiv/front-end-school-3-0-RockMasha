import type { RequestResponse } from './RequestResponse'

export type AsyncRequestResponse<T> = Promise<RequestResponse<T>>
