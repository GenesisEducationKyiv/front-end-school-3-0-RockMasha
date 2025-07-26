import type { RootState } from '@/redux/store'

export const selectModals = (state: RootState) => state.modal

export const selectFormTrackModal = (state: RootState) =>
  state.modal.formTrackModal

export const selectDeleteTrackModal = (state: RootState) =>
  state.modal.deleteTrackModal

export const selectUploadFileModal = (state: RootState) =>
  state.modal.uploadFileModal
