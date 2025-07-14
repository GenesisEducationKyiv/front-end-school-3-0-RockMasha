import { useEffect, useState } from 'react'
import { showSuccess } from '../../../../shared/helpers/tosts/showSuccess'
import { postTrack, redactTrack } from '../../../../api/track'
import { startValues } from '../consts/startValues'
import type { TrackFormValues } from '../types/TrackFormValues'
import type { Genre } from '@/types'
import type { FormikHelpers } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {
  clearCardId,
  clearCardSlug,
  closeFormTrackModal,
  selectCardIdentifier,
  useMainLoading,
} from '@/redux'

function useValues(
  values: TrackFormValues | undefined,
  currentGenres: Genre[]
) {
  const dispatch = useDispatch()
  const { trackId, trackSlug } = useSelector(selectCardIdentifier)
  const startLoading = useMainLoading()
  const [initialValues, setInitialValues] = useState(startValues)

  const closeModal = () => {
    dispatch(closeFormTrackModal())
  }

  const handleSubmit = async (
    values: TrackFormValues,
    { resetForm }: FormikHelpers<TrackFormValues>
  ) => {
    await startLoading(async () => {
      closeModal()

      const data = { ...values, genres: currentGenres }
      const result = trackId
        ? await redactTrack(data, trackId)
        : await postTrack(data)
      if (result && result.isOk()) {
        showSuccess()
      }
      resetForm()
      dispatch(clearCardId())
      dispatch(clearCardSlug())
      return result
    })
  }

  const refuseRedact = () => {
    closeModal()
    dispatch(clearCardId())
    dispatch(clearCardSlug())
  }

  useEffect(() => {
    if (trackId && trackSlug && values) {
      setInitialValues(values)
    }
  }, [trackId, trackSlug, values])

  return { initialValues, handleSubmit, refuseRedact }
}

export default useValues
