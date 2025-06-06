import { checkContextConnection, type ChildrenProps, type SetState } from '@/types'
import { createContext, useContext, useState } from 'react'

interface ValueContext {
  formTrackModal: boolean
  deleteTrackModal: boolean
  uploadFileModal: boolean
}

interface FuncContext {
  setFormTrackModal: SetState<boolean>
  setDeleteTrackModal: SetState<boolean>
  setUploadFileModal: SetState<boolean>
}

const ModalValueContext = createContext<ValueContext | null>(null)
const ModalFuncContext = createContext<FuncContext | null>(null)

export function useModalValueContext() {
  const context = useContext(ModalValueContext)
  return checkContextConnection(context)
}
export function useModalFuncContext() {
  const context = useContext(ModalFuncContext)
  return checkContextConnection(context)
}

function ModalProvider({ children }: ChildrenProps) {
  const [formTrackModal, setFormTrackModal] = useState<boolean>(false)
  const [deleteTrackModal, setDeleteTrackModal] = useState<boolean>(false)
  const [uploadFileModal, setUploadFileModal] = useState<boolean>(false)

  return (
    <ModalValueContext.Provider
      value={{ formTrackModal, deleteTrackModal, uploadFileModal }}
    >
      <ModalFuncContext.Provider
        value={{ setFormTrackModal, setDeleteTrackModal, setUploadFileModal }}
      >
        {children}
      </ModalFuncContext.Provider>
    </ModalValueContext.Provider>
  )
}

export default ModalProvider
