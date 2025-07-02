import { isPhone } from '@/shared/helpers/isPhone'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filterPanel: !isPhone(),
}

const filterSlice = createSlice({
  name: 'filterPanel',
  initialState,
  reducers: {
    open: (state) => {
      state.filterPanel = true
    },
    close: (state) => {
      state.filterPanel = false
    },
  },
})

export const { open: actionOpenFilterPanel, close: actionCloseFilterPanel } =
  filterSlice.actions

export const filterReducer = filterSlice.reducer
