import { fireEvent, render, screen } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach } from 'vitest'
import userEvent from '@testing-library/user-event'
import FiltersProvider from '@/context/FiltersProvider'
import { SortTracks } from '@/features/SortTracks'
import '@testing-library/jest-dom'
import { isSelectElement } from '@/types'
import { MemoryRouter } from 'react-router-dom'

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    wrapper: ({ children }) => (
      <MemoryRouter>
        <FiltersProvider>{children}</FiltersProvider>
      </MemoryRouter>
    ),
    ...options,
  })

const getSortAndOrderSelects = (): [HTMLSelectElement, HTMLSelectElement] => {
  const sortSelects = screen.getAllByTestId('sort-select')
  const [sortSelect, orderSelect] = sortSelects
  if (isSelectElement(sortSelect) && isSelectElement(orderSelect)) {
    return [sortSelect, orderSelect]
  } else {
    throw new Error(
      'Elements with data-testid="sort-select" are not <select> elements or are invalid'
    )
  }
}

const updateFiltersMock = vi.fn()
const clearFiltersMock = vi.fn()

vi.mock('@/shared/hooks/useFilters', () => {
  return {
    default: () => ({
      filters: {
        search: '',
        genre: '',
        artist: '',
        sort: 'title',
        order: 'desc',
      },
      updateFilters: updateFiltersMock,
      clearFilters: clearFiltersMock,
    }),
  }
})

describe('SortTracks', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('should call updateFilters with valid search input', async () => {
    customRender(<SortTracks />)
    const searchInput = screen.getByTestId('search-input')
    fireEvent.change(searchInput, {
      target: { value: 'As It Was' },
    })
    expect(updateFiltersMock).toHaveBeenCalledWith({
      name: 'search',
      value: 'As It Was',
    })
  })

  test('should call updateFilters with valid artist input', async () => {
    customRender(<SortTracks />)
    const artistInput = screen.getByTestId('filter-artist')
    fireEvent.change(artistInput, {
      target: { value: 'Harry Styles' },
    })
    expect(updateFiltersMock).toHaveBeenCalledWith({
      name: 'artist',
      value: 'Harry Styles',
    })
  })

  test('should interact with all sort-select elements', async () => {
    customRender(<SortTracks />)
    const [sortSelect, orderSelect] = getSortAndOrderSelects()
    await userEvent.selectOptions(sortSelect, 'artist')
    await userEvent.selectOptions(orderSelect, 'desc')
    expect(updateFiltersMock).toHaveBeenCalledWith({
      name: 'sort',
      value: 'artist',
    })
    expect(updateFiltersMock).toHaveBeenCalledWith({
      name: 'order',
      value: 'desc',
    })
  })

  test('should call clearFilters on ResetBtn click', async () => {
    customRender(<SortTracks />)
    const resetBtn = screen.getByTestId('reset-btn')
    await userEvent.click(resetBtn)
    expect(clearFiltersMock).toHaveBeenCalled()
  })

  test('should reset all filters after ResetBtn click', async () => {
    customRender(<SortTracks />)
    const searchInput = screen.getByTestId('search-input')
    const genreSelect = await screen.findByTestId('filter-genre')
    const artistInput = screen.getByTestId('filter-artist')
    const [sortSelect, orderSelect] = getSortAndOrderSelects()
    const resetBtn = screen.getByTestId('reset-btn')
    await userEvent.type(searchInput, 'As It Was')
    await userEvent.type(artistInput, 'Harry Styles')
    await userEvent.selectOptions(sortSelect, 'artist')
    await userEvent.selectOptions(orderSelect, 'asc')
    await userEvent.click(resetBtn)
    expect(searchInput).toHaveValue('')
    expect(genreSelect).toHaveValue('')
    expect(artistInput).toHaveValue('')
    expect(sortSelect).toHaveValue('title')
    expect(orderSelect).toHaveValue('desc')
    expect(clearFiltersMock).toHaveBeenCalled()
  })
})
