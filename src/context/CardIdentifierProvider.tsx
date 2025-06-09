import {
  checkContextConnection,
  type ChildrenProps,
  type Id,
  type SetState,
  type Slug,
} from '@/types'
import { createContext, useContext, useState } from 'react'

type ValueContext = {
  trackId: Id
  trackSlug: Slug
  clearTrackId: () => void
  clearTrackSlug: () => void
}

type FuncContext = {
  setTrackId: SetState<Id>
  setTrackSlug: SetState<Slug>
}

const CardIdentifierValueProviderContext = createContext<ValueContext | null>(
  null
)
const CardIdentifierFuncProviderContext = createContext<FuncContext | null>(
  null
)

export function useCardIdentifierValueProviderContext() {
  const context = useContext(CardIdentifierValueProviderContext)
  return checkContextConnection(context)
}

export function useCardIdentifierFuncProviderContext() {
  const context = useContext(CardIdentifierFuncProviderContext)
  return checkContextConnection(context)
}

function CardIdentifierProvider({ children }: ChildrenProps) {
  const [trackId, setTrackId] = useState<Id>('')
  const [trackSlug, setTrackSlug] = useState<Slug>('')

  const clearTrackId = () => {
    setTrackId('')
  }
  const clearTrackSlug = () => {
    setTrackSlug('')
  }

  return (
    <CardIdentifierValueProviderContext.Provider
      value={{ trackId, trackSlug, clearTrackId, clearTrackSlug }}
    >
      <CardIdentifierFuncProviderContext.Provider
        value={{ setTrackSlug, setTrackId }}
      >
        {children}
      </CardIdentifierFuncProviderContext.Provider>
    </CardIdentifierValueProviderContext.Provider>
  )
}

export default CardIdentifierProvider
