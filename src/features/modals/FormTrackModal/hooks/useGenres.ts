import { useState } from 'react'
import { genres } from '../../../../api/genres'
import { isGenre, type Genre, type SetState } from '@/types'
import type { TrackFormValues } from '../types/TrackFormValues'

function useGenres(
  currentGenres: Genre[],
  setCurrentGenres: SetState<Genre[]>
) {
  const [isNotHiddenGenresSelect, setIsNotHiddenGenresSelect] =
    useState<boolean>(false)

  const addGenre = (values: TrackFormValues) => {
    setCurrentGenres((prev) => {
      const newList = [...prev]
      if (!isGenre(values.genres)) return prev
      newList.push(values.genres)
      return newList
    })
    setIsNotHiddenGenresSelect(false)
  }

  const removeGenre = (event: React.MouseEvent<HTMLDivElement>) => {
    const el = event.currentTarget
    const genre = el.dataset.genre
    setCurrentGenres((prev) => prev.filter((item) => item !== genre))
  }

  const getFirstValueOfGenresSelect = () => {
    const firstItem = genres.find((item) => !currentGenres.includes(item))
    setIsNotHiddenGenresSelect(true)
    return firstItem
  }

  return {
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    getFirstValueOfGenresSelect,
  }
}

export default useGenres
