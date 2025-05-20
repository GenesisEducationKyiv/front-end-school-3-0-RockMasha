import { showError } from "../../constans/tosts/showError";
import { showSuccess } from "../../constans/tosts/showSuccess";
import { deleteTrack } from "../../service/api";
import LetterSvg from "../../svg/LetterSvg";
import { useCardValueProviderContext } from "../CardProvider/CardProvider";
import { useLoaderProviderContext } from "../LoaderProvider/LoaderProvider";
import { useModalFuncContext } from "../ModalProvider/ModalProvider";
import Modal from "../rep/Modal/Modal";
import {
  Box,
  Btn,
  BtnWrapper,
  SvgWrapper,
  Message,
} from "./DeleteTrackModal.styled";

function DeleteTrackModal() {
  const { trackId, clearTrackId } = useCardValueProviderContext();
  const { setDeleteTrack } = useModalFuncContext();
  const { setLoading } = useLoaderProviderContext();

  const closeModal = () => {
    setDeleteTrack(false);
  };

  const deleteItem = async () => {
    try {
      setLoading(true);
      closeModal();
      trackId && (await deleteTrack(trackId));
      clearTrackId();
      showSuccess();
    } catch (error) {
      showError();
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal width="60%">
      <Box>
        <Message>Delete this Track?</Message>
        <SvgWrapper>
          <LetterSvg />
        </SvgWrapper>
        <BtnWrapper data-testid="confirm-dialog">
          <Btn
            data-testid="cancel-delete"
            onClick={() => {
              clearTrackId();
              closeModal();
            }}
            color="no"
          >
            No
          </Btn>
          <Btn data-testid="confirm-delete" onClick={deleteItem} color="yes">
            Yes
          </Btn>
        </BtnWrapper>
      </Box>
    </Modal>
  );
}

export default DeleteTrackModal;
