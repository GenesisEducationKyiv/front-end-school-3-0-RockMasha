import { configureStore } from '@reduxjs/toolkit'
import { modalReducer } from './slices/modal/modalSlice'
import { filterReducer } from './slices/filterPanel/filterPanelSlice'
import { cardIdentifierReducer } from './slices/cardIdentifier/cardIdentifierSlice'
import { loadingReducer } from './slices/loading/loadingSlice'

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    modal: modalReducer,
    filterPanel: filterReducer,
    cardIdentifier: cardIdentifierReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
