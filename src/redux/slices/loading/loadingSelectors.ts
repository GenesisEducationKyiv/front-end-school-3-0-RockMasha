import type { RootState } from '@/redux/store'

export const selectLoading = (state: RootState) => state.loading.loading
