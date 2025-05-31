import { useCardIdentifierFuncProviderContext } from "../../../../context/CardIdentifierProvider";
import { useModalFuncContext } from "../../../../context/ModalProvider";

function useCardBtn({ slug, id }) {
  const { setFormTrack, setDeleteTrack, setUploadFile } = useModalFuncContext();
  const { setTrackSlug, setTrackId } = useCardIdentifierFuncProviderContext();

  const openDeleteModal = () => {
    setTrackId(id);
    setDeleteTrack(true);
  };
  const openRedactModal = () => {
    setTrackSlug(slug);
    setTrackId(id);
    setFormTrack(true);
  };
  const openUploadModal = () => {
    setTrackSlug(slug);
    setTrackId(id);
    setUploadFile(true);
  };

  return { openDeleteModal, openRedactModal, openUploadModal };
}

export default useCardBtn;
