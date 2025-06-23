import { useEffect, useState, type ChangeEvent } from 'react'
import { showSuccess } from '../../../../shared/helpers/tosts/showSuccess'
import { deleteFile, postFile } from '../../../../api/file'
import { getTrackBySlug } from '../../../../api/track'
import type { FileData } from '@/types'
import { getResultFromRequest } from '@/shared/helpers/getResultFromRequest'
import { useDispatch, useSelector } from 'react-redux'
import {
  actionClearCardId,
  actionClearCardSlug,
  actionCloseUploadFileModal,
  selectorCardIdentifier,
  useMainLoading,
} from '@/redux'

function useUploadFileModal() {
  const dispatch = useDispatch()
  const { trackId, trackSlug } = useSelector(selectorCardIdentifier)
  const startLoading = useMainLoading()
  const [isFile, setIsFile] = useState<boolean>(false)
  const [isBackFile, setIsBackFile] = useState<boolean>(false)

  const submitForm = async (values: FileData) => {
    startLoading(async () => {
      dispatch(actionCloseUploadFileModal())
      await postFile(values, trackId)
      dispatch(actionClearCardId())
      dispatch(actionClearCardSlug())
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
    dispatch(actionClearCardId())
    dispatch(actionClearCardSlug())
    dispatch(actionCloseUploadFileModal())
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
