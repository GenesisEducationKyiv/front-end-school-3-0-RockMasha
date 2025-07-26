import type { Slug, Id } from '@/types'
import { useDispatch } from 'react-redux'
import {
  openDeleteTrackModal,
  openFormTrackModal,
  openUploadFileModal,
  setCardId,
  setCardSlug,
} from '@/redux'

interface Arguments {
  slug: Slug
  id: Id
}

function useCardBtn({ slug, id }: Arguments) {
  const dispatch = useDispatch()

  const openDeleteModal = () => {
    dispatch(setCardId({ id }))
    dispatch(openDeleteTrackModal())
  }
  const openRedactModal = () => {
    dispatch(setCardSlug({ slug }))
    dispatch(setCardId({ id }))
    dispatch(openFormTrackModal())
  }
  const openUploadModal = () => {
    dispatch(setCardId({ id }))
    dispatch(setCardSlug({ slug }))
    dispatch(openUploadFileModal())
  }

  return { openDeleteModal, openRedactModal, openUploadModal }
}

export default useCardBtn
