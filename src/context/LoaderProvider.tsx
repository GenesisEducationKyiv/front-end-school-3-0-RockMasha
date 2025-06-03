import { createContext, useContext } from 'react'
import useLoading from '../shared/hooks/useLoading'
import { checkContextConnection, type ChildrenProps } from '@/types'

interface LoaderContext {
  loading: boolean
  startLoading: <T>(callbackFn: () => Promise<T>) => Promise<T | undefined>
}

const LoaderProviderContext = createContext<LoaderContext | null>(null)

export function useLoaderProviderContext() {
  const context = useContext(LoaderProviderContext)
  return checkContextConnection(context)
}

function LoaderProvider({ children }: ChildrenProps) {
  const [loading, startLoading] = useLoading(true)

  return (
    <LoaderProviderContext.Provider value={{ loading, startLoading }}>
      {children}
    </LoaderProviderContext.Provider>
  )
}

export default LoaderProvider
