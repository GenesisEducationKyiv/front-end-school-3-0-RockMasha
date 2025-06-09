import type { filterOrderValue } from '@/shared/consts/filterOrderValue'
import type { filterSortValue } from '@/shared/consts/filterSortValue'
import type { Genre } from '../track/Genre'

export type Order = (typeof filterOrderValue)[number]
export type Sort = (typeof filterSortValue)[number]

export type Filter = {
  search?: string
  artist?: string
  genre?: Genre
  order?: Order
  sort?: Sort
}
