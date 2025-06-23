import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  trackId: '',
  trackSlug: '',
}

const cardIdentifierSlice = createSlice({
  name: 'cardIdentifier',
  initialState,
  reducers: {
    setId: (state, action) => {
      state.trackId = action.payload.id
    },
    clearId: (state) => {
      state.trackId = ''
    },
    setSlug: (state, action) => {
      state.trackSlug = action.payload.slug
    },
    clearSlug: (state) => {
      state.trackSlug = ''
    },
  },
})

export const {
  setId: actionSetCardId,
  clearId: actionClearCardId,
  setSlug: actionSetCardSlug,
  clearSlug: actionClearCardSlug,
} = cardIdentifierSlice.actions

export const cardIdentifierReducer = cardIdentifierSlice.reducer
