import useValues from './useValues'
import useGenres from './useGenres'
import getFieldsValues from '../helpers/getFieldsValues'
import { useCardIdentifierValueProviderContext } from '../../../../context/CardIdentifierProvider'
import { useEffect, useState } from 'react'
import type { Genre } from '@/types'
import type { TrackFormValues } from '../types/TrackFormValues'

function useFormTrackModal() {
  const { trackId, trackSlug } = useCardIdentifierValueProviderContext()
  const [values, setValues] = useState<TrackFormValues>()
  const [currentGenres, setCurrentGenres] = useState<Genre[]>()

  const isRedactTrack = !!(trackId && trackSlug)

  const setFieldsValues = async () => {
    const data = await getFieldsValues(trackSlug)
    if (!data) return
    setValues(data.values)
    setCurrentGenres(data.genres)
  }

  useEffect(() => {
    if (isRedactTrack) {
      setFieldsValues()
    }
  }, [])

  const {
    genresList,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    getFirstValueOfGenresSelect,
  } = useGenres(currentGenres)

  const { initialValues, handleSubmit, refuseRedact } = useValues(
    values,
    genresList
  )

  return {
    genresList,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    initialValues,
    handleSubmit,
    refuseRedact,
    isRedactTrack,
    getFirstValueOfGenresSelect,
  }
}

export default useFormTrackModal
