import { useEffect, useState } from "react";
import { useCardIdentifierValueProviderContext } from "../../../../context/CardIdentifierProvider";
import { useLoaderProviderContext } from "../../../../context/LoaderProvider";
import { useModalFuncContext } from "../../../../context/ModalProvider";
import { showSuccess } from "../../../../shared/helpers/tosts/showSuccess";
import { deleteFile, postFile } from "../../../../api/file";
import { getTrackBySlug } from "../../../../api/track";

function useUploadFileModal() {
  const { trackId, trackSlug, clearTrackId, clearTrackSlug } =
    useCardIdentifierValueProviderContext();
  const { setUploadFile } = useModalFuncContext();
  const { startLoading } = useLoaderProviderContext();
  const [isFile, setIsFile] = useState();
  const [isBackFile, setIsBackFile] = useState();

  const submitForm = async (values) => {
    startLoading(async () => {
      setUploadFile(false);
      await postFile(values, trackId);
      clearTrackId();
      clearTrackSlug();
      showSuccess();
    });
  };

  const unloadFile = async () => {
    if (isBackFile) {
      startLoading(async () => {
        await deleteFile(trackId);
        setIsBackFile(false);
        showSuccess();
      });
    }
    setIsFile(false);
  };

  const getUploadFile = (event) => {
    const file = event.target.files[0];
    setIsFile(true);
    return file;
  };

  const closeModal = () => {
    clearTrackId();
    clearTrackSlug();
    setUploadFile(false);
  };

  const getFile = async () => {
    const answer = await getTrackBySlug(trackSlug);
    if (answer.audioFile) {
      setIsFile(true);
      setIsBackFile(true);
    }
  };

  useEffect(() => {
    getFile();
  }, []);

  return { isFile, submitForm, unloadFile, getUploadFile, closeModal };
}

export default useUploadFileModal;
