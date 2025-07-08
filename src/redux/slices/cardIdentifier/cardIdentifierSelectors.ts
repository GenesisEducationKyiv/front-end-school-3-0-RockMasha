import type { RootState } from '@/redux/store'

export const selectCardIdentifier = (state: RootState) => state.cardIdentifier

export const selectCardId = (state: RootState) => state.cardIdentifier.trackId
