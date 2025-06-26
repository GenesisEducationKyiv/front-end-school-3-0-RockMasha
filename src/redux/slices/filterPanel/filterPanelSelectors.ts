import type { RootState } from '@/redux/store'

export const selectFilterPanel = (state: RootState) =>
  state.filterPanel.filterPanel
