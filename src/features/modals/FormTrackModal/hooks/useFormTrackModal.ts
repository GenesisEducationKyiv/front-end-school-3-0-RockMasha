import useTrackFormSubmit from './useTrackFormSubmit'
import useGenres from './useGenres'
import getFieldsValues from '../helpers/getFieldsValues'
import { useEffect, useState } from 'react'
import type { Genre } from '@/types'
import type { TrackFormValues } from '../types/TrackFormValues'
import { useSelector } from 'react-redux'
import { selectorCardIdentifier } from '@/redux'

function useFormTrackModal() {
  const { trackId, trackSlug } = useSelector(selectorCardIdentifier)
  const [values, setValues] = useState<TrackFormValues>()
  const [currentGenres, setCurrentGenres] = useState<Genre[]>([])

  const isRedactTrack = !!(trackId && trackSlug)
  console.log('trackId', trackId)
  console.log('trackSlug', trackSlug)
  console.log('isRedactTrack', isRedactTrack)

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
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    getFirstValueOfGenresSelect,
  } = useGenres(currentGenres, setCurrentGenres)

  const { initialValues, handleSubmit, refuseRedact } = useTrackFormSubmit(
    values,
    currentGenres
  )

  return {
    currentGenres,
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
