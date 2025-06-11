import {
  includesLiteral,
  type Filter,
  type UpdateFiltersPayload,
} from '@/types'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { filterSortValue } from '../consts/filterSortValue'
import { filterOrderValue } from '../consts/filterOrderValue'
import { O, pipe } from '@mobily/ts-belt'

type UpdateFiltersFunc = (payload: UpdateFiltersPayload) => void

const getValidParam = <T extends string>(
  value: string | undefined,
  validValues: readonly T[],
  defaultValue: T
): T =>
  pipe(
    O.fromNullable(value),
    O.map(
      (val) => (includesLiteral(validValues, val) ? val : defaultValue) as T
    ),
    O.getWithDefault(defaultValue)
  )

const getStringParam = (value: string | undefined): string =>
  pipe(O.fromNullable(value), O.getWithDefault('' as string))

function useFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const params = useMemo(() => {
    return Object.fromEntries(searchParams)
  }, [searchParams])
  const { sort, order, search, genre, artist } = params

  const filters: Filter = useMemo(
    () => ({
      sort: getValidParam(sort, filterSortValue, 'title'),
      order: getValidParam(order, filterOrderValue, 'asc'),
      search: getStringParam(search),
      genre: getStringParam(genre),
      artist: getStringParam(artist),
    }),
    [params]
  )

  const updateFilters: UpdateFiltersFunc = ({ name, value }) => {
    setSearchParams({ ...params, [name]: value })
  }

  const clearFilters = () => {
    setSearchParams({})
  }

  return { filters, updateFilters, clearFilters }
}

export default useFilter
