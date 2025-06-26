import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  formTrackModal: false,
  deleteTrackModal: false,
  uploadFileModal: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openFormTrackModal: (state) => {
      state.formTrackModal = true
    },
    closeFormTrackModal: (state) => {
      state.formTrackModal = false
    },
    openDeleteTrackModal: (state) => {
      state.deleteTrackModal = true
    },
    closeDeleteTrackModal: (state) => {
      state.deleteTrackModal = false
    },
    openUploadFileModal: (state) => {
      state.uploadFileModal = true
    },
    closeUploadFileModal: (state) => {
      state.uploadFileModal = false
    },
  },
})

export const {
  openFormTrackModal: openFormTrackModal,
  closeFormTrackModal: closeFormTrackModal,
  openDeleteTrackModal: openDeleteTrackModal,
  closeDeleteTrackModal: closeDeleteTrackModal,
  openUploadFileModal: openUploadFileModal,
  closeUploadFileModal: closeUploadFileModal,
} = modalSlice.actions

export const modalReducer = modalSlice.reducer
