import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
}

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true
    },
    end: (state) => {
      state.loading = false
    },
  },
})

export const { start: actionStartLoading, end: actionEndLoading } =
  loadingSlice.actions

export const loadingReducer = loadingSlice.reducer
