import type { RootState } from '@/redux/store'

export const selectorCardIdentifier = (state: RootState) => state.cardIdentifier

export const selectorCardId = (state: RootState) => state.cardIdentifier.id
