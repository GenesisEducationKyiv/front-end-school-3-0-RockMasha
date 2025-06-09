import { filterOrderValue } from '@/shared/consts/filterOrderValue'
import { filterSortValue } from '@/shared/consts/filterSortValue'
import { includesLiteral, isGenre, type UpdateFiltersPayload } from '@/types'

export function isValidFilterPayload(payload: {
  name: string
  value: string
}): payload is UpdateFiltersPayload {
  const { name, value } = payload

  switch (name) {
    case 'search':
    case 'artist':
      return typeof value === 'string'

    case 'genre':
      return isGenre(value) || value === ''

    case 'sort':
      return includesLiteral(filterSortValue, value)

    case 'order':
      return includesLiteral(filterOrderValue, value)

    default:
      return false
  }
}
