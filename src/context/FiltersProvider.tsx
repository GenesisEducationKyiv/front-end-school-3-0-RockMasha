import { createContext, useContext, useState } from 'react'
import useHidden from '../shared/hooks/useHidden'
import {
  checkContextConnection,
  type ChildrenProps,
  type Filter,
  type SetState,
  type UpdateFiltersPayload,
} from '@/types'

type UpdateFiltersFunc = (payload: UpdateFiltersPayload) => void

type ChangeContext = {
  updateFilters: UpdateFiltersFunc
  setFilters: SetState<Filter>
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
  const [filters, setFilters] = useState<Filter>({
    sort: 'title',
    order: 'asc',
    search: '',
    genre: '',
    artist: '',
  })

  const updateFilters: UpdateFiltersFunc = ({ name, value }) => {
    setFilters((prev) => {
      return {
        ...prev,
        [name]: value,
      }
    })
  }

  const hiddenValue = useHidden()

  return (
    <FiltersValueContext.Provider value={filters}>
      <FiltersChangeContext value={{ updateFilters, setFilters }}>
        <FiltersHiddenContext.Provider value={hiddenValue}>
          {children}
        </FiltersHiddenContext.Provider>
      </FiltersChangeContext>
    </FiltersValueContext.Provider>
  )
}

export default FiltersProvider
