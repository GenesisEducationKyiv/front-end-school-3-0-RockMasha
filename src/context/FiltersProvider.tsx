import { createContext, useContext } from 'react'
import useHidden from '../shared/hooks/useHidden'
import {
  checkContextConnection,
  type ChildrenProps,
  type Filter,
  type UpdateFiltersPayload,
} from '@/types'
import useFilter from '@/shared/hooks/useFilters'

type UpdateFiltersFunc = (payload: UpdateFiltersPayload) => void

type ChangeContext = {
  updateFilters: UpdateFiltersFunc
  clearFilters: () => void
}

type HiddenContext = {
  hidden: boolean
  toggleHidden: () => void
}

const FiltersValueContext = createContext<Filter | null>(null)
const FiltersChangeContext = createContext<ChangeContext | null>(null)
const FiltersHiddenContext = createContext<HiddenContext | null>(null)

export function useFiltersValueContext() {
  const context = useContext(FiltersValueContext)
  return checkContextConnection(context)
}
export function useFiltersChangeContext() {
  const context = useContext(FiltersChangeContext)
  return checkContextConnection(context)
}
export function useFiltersHiddenContext() {
  const context = useContext(FiltersHiddenContext)
  return checkContextConnection(context)
}

function FiltersProvider({ children }: ChildrenProps) {
  const { filters, updateFilters, clearFilters } = useFilter()
  const hiddenValue = useHidden()

  return (
    <FiltersValueContext.Provider value={filters}>
      <FiltersChangeContext value={{ updateFilters, clearFilters }}>
        <FiltersHiddenContext.Provider value={hiddenValue}>
          {children}
        </FiltersHiddenContext.Provider>
      </FiltersChangeContext>
    </FiltersValueContext.Provider>
  )
}

export default FiltersProvider
