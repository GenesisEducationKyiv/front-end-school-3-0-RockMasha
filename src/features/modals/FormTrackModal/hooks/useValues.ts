import { useEffect, useState } from 'react'
import { useCardIdentifierValueProviderContext } from '../../../../context/CardIdentifierProvider'
import { useLoaderProviderContext } from '../../../../context/LoaderProvider'
import { useModalFuncContext } from '../../../../context/ModalProvider'
import { showSuccess } from '../../../../shared/helpers/tosts/showSuccess'
import { postTrack, redactTrack } from '../../../../api/track'
import { startValues } from '../consts/startValues'
import type { TrackFormValues } from '../types/TrackFormValues'
import type { Genre } from '@/types'
import type { FormikHelpers } from 'formik'

function useValues(
  values: TrackFormValues | undefined,
  currentGenres: Genre[]
) {
  const { trackId, trackSlug, clearTrackId, clearTrackSlug } =
    useCardIdentifierValueProviderContext()
  const { setFormTrackModal } = useModalFuncContext()
  const { startLoading } = useLoaderProviderContext()
  const [initialValues, setInitialValues] = useState(startValues)

  const closeModal = () => {
    setFormTrackModal(false)
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
      clearTrackId()
      clearTrackSlug()
      return result
    })
  }

  const refuseRedact = () => {
    closeModal()
    clearTrackId()
    clearTrackSlug()
  }

  useEffect(() => {
    if (trackId && trackSlug && values) {
      setInitialValues(values)
    }
  }, [values])

  return { initialValues, handleSubmit, refuseRedact }
}

export default useValues
