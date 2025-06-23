import { useDispatch, useSelector } from 'react-redux'
import { deleteTrack } from '../../../../api/track'
import { showSuccess } from '../../../../shared/helpers/tosts/showSuccess'
import {
  actionClearCardId,
  actionCloseDeleteTrackModal,
  selectorCardId,
  useMainLoading,
} from '@/redux'

function useDeleteTrackModal() {
  const dispatch = useDispatch()
  const trackId = useSelector(selectorCardId)
  const startLoading = useMainLoading()

  const closeModal = () => {
    dispatch(actionCloseDeleteTrackModal())
  }

  const deleteItem = async () => {
    startLoading(async () => {
      closeModal()
      trackId && (await deleteTrack(trackId))
      dispatch(actionClearCardId())
      showSuccess()
    })
  }

  const refuseDeleteItem = () => {
    dispatch(actionClearCardId())
    closeModal()
  }

  return { deleteItem, refuseDeleteItem }
}

export default useDeleteTrackModal
