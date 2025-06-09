import type { RequestResponse } from '../api/responses/RequestResponse'

type CallbackFn<T> = Promise<RequestResponse<T> | void>

export type StartLoadingFn = <T>(
  callbackFn: () => CallbackFn<T>
) => Promise<RequestResponse<T> | void>
