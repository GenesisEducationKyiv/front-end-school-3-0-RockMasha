import { deleteTrack } from "../../../../api/track";
import { useCardIdentifierValueProviderContext } from "../../../../context/CardIdentifierProvider";
import { useLoaderProviderContext } from "../../../../context/LoaderProvider";
import { useModalFuncContext } from "../../../../context/ModalProvider";
import { showSuccess } from "../../../../shared/helpers/tosts/showSuccess";

function useDeleteTrackModal() {
  const { trackId, clearTrackId } = useCardIdentifierValueProviderContext();
  const { setDeleteTrack } = useModalFuncContext();
  const { startLoading } = useLoaderProviderContext();

  const closeModal = () => {
    setDeleteTrack(false);
  };

  const deleteItem = async () => {
    startLoading(async () => {
      closeModal();
      trackId && (await deleteTrack(trackId));
      clearTrackId();
      showSuccess();
    });
  };

  const refuseDeleteItem = () => {
    clearTrackId();
    closeModal();
  };

  return { deleteItem, refuseDeleteItem };
}

export default useDeleteTrackModal;
