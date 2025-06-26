import type { Id, Slug } from '@/types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  trackId: '' as Id,
  trackSlug: '' as Slug,
}

type SetIdPayload = { id: typeof initialState.trackId }
type SetSlugPayload = { slug: typeof initialState.trackSlug }

const cardIdentifierSlice = createSlice({
  name: 'cardIdentifier',
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<SetIdPayload>) => {
      state.trackId = action.payload.id
    },
    clearId: (state) => {
      state.trackId = ''
    },
    setSlug: (state, action: PayloadAction<SetSlugPayload>) => {
      state.trackSlug = action.payload.slug
    },
    clearSlug: (state) => {
      state.trackSlug = ''
    },
  },
})

export const {
  setId: setCardId,
  clearId: clearCardId,
  setSlug: setCardSlug,
  clearSlug: clearCardSlug,
} = cardIdentifierSlice.actions

export const cardIdentifierReducer = cardIdentifierSlice.reducer
