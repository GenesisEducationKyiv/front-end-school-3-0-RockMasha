import type { Slug, Id } from '@/types'
import { useDispatch } from 'react-redux'
import {
  actionOpenDeleteTrackModal,
  actionOpenFormTrackModal,
  actionOpenUploadFileModal,
  actionSetCardId,
  actionSetCardSlug,
} from '@/redux'

interface Arguments {
  slug: Slug
  id: Id
}

function useCardBtn({ slug, id }: Arguments) {
  const dispatch = useDispatch()

  const openDeleteModal = () => {
    dispatch(actionSetCardId({ id }))
    dispatch(actionOpenDeleteTrackModal())
  }
  const openRedactModal = () => {
    dispatch(actionSetCardSlug({ slug }))
    dispatch(actionSetCardId({ id }))
    dispatch(actionOpenFormTrackModal())
  }
  const openUploadModal = () => {
    dispatch(actionSetCardId({ id }))
    dispatch(actionSetCardSlug({ slug }))
    dispatch(actionOpenUploadFileModal())
  }

  return { openDeleteModal, openRedactModal, openUploadModal }
}

export default useCardBtn
