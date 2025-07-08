export type StartLoadingFn = <R>(
  callbackFn: () => Promise<R>
) => Promise<R | undefined>
