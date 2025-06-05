import { createContext, useContext } from 'react'
import useLoading from '../shared/hooks/useLoading'
import {
  checkContextConnection,
  type ChildrenProps,
  type StartLoadingFn,
} from '@/types'

interface LoaderContext {
  loading: boolean
  startLoading: StartLoadingFn
}

const LoaderProviderContext = createContext<LoaderContext | null>(null)

export function useLoaderProviderContext() {
  const context = useContext(LoaderProviderContext)
  return checkContextConnection(context)
}

function LoaderProvider({ children }: ChildrenProps) {
  const [loading, startLoading] = useLoading()

  return (
    <LoaderProviderContext.Provider value={{ loading, startLoading }}>
      {children}
    </LoaderProviderContext.Provider>
  )
}

export default LoaderProvider
