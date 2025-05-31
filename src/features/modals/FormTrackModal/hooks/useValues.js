import { useEffect, useState } from "react";
import { useCardIdentifierValueProviderContext } from "../../../../context/CardIdentifierProvider";
import { useLoaderProviderContext } from "../../../../context/LoaderProvider";
import { useModalFuncContext } from "../../../../context/ModalProvider";
import { showSuccess } from "../../../../shared/helpers/tosts/showSuccess";
import { postTrack, redactTrack } from "../../../../api/track";
import { startValues } from "../consts/startValues";

function useValues(values, genresList) {
  const { trackId, trackSlug, clearTrackId, clearTrackSlug } =
    useCardIdentifierValueProviderContext();
  const { setFormTrack } = useModalFuncContext();
  const { startLoading } = useLoaderProviderContext();
  const [initialValues, setInitialValues] = useState(startValues);

  const closeModal = () => {
    setFormTrack(false);
  };

  const handleSubmit = async (values, { resetForm }) => {
    startLoading(async () => {
      try {
        closeModal();
        const data = { ...values, genres: genresList };
        if (trackId) {
          await redactTrack(data, trackId);
        } else {
          await postTrack(data);
        }
        showSuccess();
      } catch (error) {
        throw new Error(error);
      } finally {
        resetForm();
        clearTrackId();
        clearTrackSlug();
      }
    });
  };

  const refuseRedact = () => {
    closeModal();
    clearTrackId();
    clearTrackSlug();
  };

  useEffect(() => {
    if (trackId && trackSlug && values) {
      setInitialValues(values);
    }
  }, [values]);

  return { initialValues, handleSubmit, refuseRedact };
}

export default useValues;
