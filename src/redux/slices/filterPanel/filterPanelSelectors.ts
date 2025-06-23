import type { RootState } from '@/redux/store'

export const selectorFilterPanel= (state: RootState) =>
  state.filterPanel.filterPanel
