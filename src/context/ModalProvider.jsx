import { createContext, useContext, useState } from "react";

const ModalValueContext = createContext();
const ModalFuncContext = createContext();

export function useModalValueContext() {
  return useContext(ModalValueContext);
}
export function useModalFuncContext() {
  return useContext(ModalFuncContext);
}

function ModalProvider({ children }) {
  const [formTrack, setFormTrack] = useState(false);
  const [deleteTrack, setDeleteTrack] = useState(false);
  const [uploadFile, setUploadFile] = useState(false);

  return (
    <ModalValueContext.Provider value={{ formTrack, deleteTrack, uploadFile }}>
      <ModalFuncContext.Provider
        value={{ setFormTrack, setDeleteTrack, setUploadFile }}
      >
        {children}
      </ModalFuncContext.Provider>
    </ModalValueContext.Provider>
  );
}

export default ModalProvider;
