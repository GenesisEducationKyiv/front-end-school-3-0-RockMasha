import { useEffect, useState } from 'react'
import { useCardIdentifierValueProviderContext } from '../../../../context/CardIdentifierProvider'
import { genres } from '../../../../api/genres'
import { isGenre, type Genre } from '@/types'
import type { TrackFormValues } from '../types/TrackFormValues'

function useGenres(currentGenres: Genre[] | undefined) {
  const [genresList, setGenresList] = useState<Genre[]>([])
  const [isNotHiddenGenresSelect, setIsNotHiddenGenresSelect] =
    useState<boolean>(false)
  const { trackId, trackSlug } = useCardIdentifierValueProviderContext()

  const addGenre = (values: TrackFormValues) => {
    setGenresList((prev) => {
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
    setGenresList((prev) => prev.filter((item) => item !== genre))
  }

  const getFirstValueOfGenresSelect = () => {
    const firstItem = genres.find((item) => !genresList.includes(item))
    setIsNotHiddenGenresSelect(true)
    return firstItem
  }

  useEffect(() => {
    if (trackId && trackSlug && currentGenres) {
      setGenresList(currentGenres)
    }
  }, [currentGenres])

  return {
    genresList,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    getFirstValueOfGenresSelect,
  }
}

export default useGenres
