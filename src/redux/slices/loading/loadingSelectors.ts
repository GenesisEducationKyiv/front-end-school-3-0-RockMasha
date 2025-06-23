import type { RootState } from '@/redux/store'

export const selectorLoading = (state: RootState) => state.loading.loading
