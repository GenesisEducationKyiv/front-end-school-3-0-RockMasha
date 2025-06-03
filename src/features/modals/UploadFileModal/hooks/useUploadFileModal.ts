import { useEffect, useState, type ChangeEvent } from 'react'
import { useCardIdentifierValueProviderContext } from '../../../../context/CardIdentifierProvider'
import { useLoaderProviderContext } from '../../../../context/LoaderProvider'
import { useModalFuncContext } from '../../../../context/ModalProvider'
import { showSuccess } from '../../../../shared/helpers/tosts/showSuccess'
import { deleteFile, postFile } from '../../../../api/file'
import { getTrackBySlug } from '../../../../api/track'
import type { FileData } from '@/types'
import { getResultFromRequest } from '@/shared/helpers/getResultFromRequest'

function useUploadFileModal() {
  const { trackId, trackSlug, clearTrackId, clearTrackSlug } =
    useCardIdentifierValueProviderContext()
  const { setUploadFileModal } = useModalFuncContext()
  const { startLoading } = useLoaderProviderContext()
  const [isFile, setIsFile] = useState<boolean>(false)
  const [isBackFile, setIsBackFile] = useState<boolean>(false)

  const submitForm = async (values: FileData) => {
    startLoading(async () => {
      setUploadFileModal(false)
      await postFile(values, trackId)
      clearTrackId()
      clearTrackSlug()
      showSuccess()
    })
  }

  const unloadFile = async () => {
    if (isBackFile) {
      startLoading(async () => {
        await deleteFile(trackId)
        setIsBackFile(false)
        showSuccess()
      })
    }
    setIsFile(false)
  }

  const getUploadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return undefined
    const file = files[0]
    setIsFile(true)
    return file
  }

  const closeModal = () => {
    clearTrackId()
    clearTrackSlug()
    setUploadFileModal(false)
  }

  const getFile = async () => {
    const answer = await getTrackBySlug(trackSlug)
    const track = getResultFromRequest(answer)
    if (track && track.audioFile) {
      setIsFile(true)
      setIsBackFile(true)
    }
  }

  useEffect(() => {
    getFile()
  }, [])

  return { isFile, submitForm, unloadFile, getUploadFile, closeModal }
}

export default useUploadFileModal
