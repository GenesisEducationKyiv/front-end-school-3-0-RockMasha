import type { Slug, Id } from '@/types'
import { useCardIdentifierFuncProviderContext } from '../../../../context/CardIdentifierProvider'
import { useModalFuncContext } from '../../../../context/ModalProvider'

interface Arguments {
  slug: Slug
  id: Id
}

function useCardBtn({ slug, id }: Arguments) {
  const { setFormTrackModal, setDeleteTrackModal, setUploadFileModal } =
    useModalFuncContext()
  const { setTrackSlug, setTrackId } = useCardIdentifierFuncProviderContext()

  const openDeleteModal = () => {
    setTrackId(id)
    setDeleteTrackModal(true)
  }
  const openRedactModal = () => {
    setTrackSlug(slug)
    setTrackId(id)
    setFormTrackModal(true)
  }
  const openUploadModal = () => {
    setTrackSlug(slug)
    setTrackId(id)
    setUploadFileModal(true)
  }

  return { openDeleteModal, openRedactModal, openUploadModal }
}

export default useCardBtn
