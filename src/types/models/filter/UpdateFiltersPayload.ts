import type { Genre } from '../track/Genre'
import type { Order, Sort } from './Filter'

export type UpdateFiltersPayload =
  | { name: 'search'; value: string }
  | { name: 'artist'; value: string }
  | { name: 'genre'; value: Genre }
  | { name: 'sort'; value: Sort }
  | { name: 'order'; value: Order }
