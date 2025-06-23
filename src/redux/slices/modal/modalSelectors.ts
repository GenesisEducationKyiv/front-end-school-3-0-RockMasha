import type { RootState } from '@/redux/store'

export const selectorModals = (state: RootState) => state.modal

export const selectorFormTrackModal = (state: RootState) =>
  state.modal.formTrackModal

export const selectorDeleteTrackModal = (state: RootState) =>
  state.modal.deleteTrackModal

export const selectorUploadFileModal = (state: RootState) =>
  state.modal.uploadFileModal
