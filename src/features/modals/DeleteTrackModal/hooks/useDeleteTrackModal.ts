import { useDispatch, useSelector } from 'react-redux'
import { deleteTrack } from '../../../../api/track'
import { showSuccess } from '../../../../shared/helpers/tosts/showSuccess'
import {
  clearCardId,
  closeDeleteTrackModal,
  selectCardId,
  useMainLoading,
} from '@/redux'

function useDeleteTrackModal() {
  const dispatch = useDispatch()
  const trackId = useSelector(selectCardId)
  const startLoading = useMainLoading()

  const closeModal = () => {
    dispatch(closeDeleteTrackModal())
  }

  const deleteItem = async () => {
    startLoading(async () => {
      if (trackId) {
        await deleteTrack(trackId)
      }
      closeModal()
      dispatch(clearCardId())
      showSuccess()
    })
  }

  const refuseDeleteItem = () => {
    dispatch(clearCardId())
    closeModal()
  }

  return { deleteItem, refuseDeleteItem }
}

export default useDeleteTrackModal
