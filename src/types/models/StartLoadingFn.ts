import type { RequestResponse } from '../api/responses/RequestResponse'

export interface StartLoadingFn {
  <T>(
    callbackFn: () => Promise<RequestResponse<T>>
  ): Promise<RequestResponse<T>>
  (callbackFn: () => Promise<void>): Promise<void>
}
