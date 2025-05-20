import ArrowSvg from "../../svg/ArrowSvg";
import DeleteSvg from "../../svg/DeleteSvg";
import RedactSvg from "../../svg/RedactSvg";
import { useCardFuncProviderContext } from "../CardProvider/CardProvider";
import { useModalFuncContext } from "../ModalProvider/ModalProvider";
import {
  ActionButton,
  ActionButtonHidden,
  ActionButtonsList,
  ActionButtonUpload,
  ActionItem,
  ActionItemHidden,
} from "./CardBtns.styled";

function CardBtns({ slug, id }) {
  const { setFormTrack, setDeleteTrack, setUploadFile } = useModalFuncContext();
  const { setTrackSlug, setTrackId } = useCardFuncProviderContext();

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

  return (
    <ActionButtonsList>
      <ActionItemHidden>
        <ActionButtonHidden />
      </ActionItemHidden>
      <ActionItem>
        <ActionButtonUpload
          data-testid={"upload-track-" + id}
          onClick={openUploadModal}
        >
          <ArrowSvg />
        </ActionButtonUpload>
      </ActionItem>
      <ActionItem>
        <ActionButton
          data-testid={"edit-track-" + id}
          onClick={openRedactModal}
        >
          <RedactSvg />
        </ActionButton>
      </ActionItem>
      <ActionItem>
        <ActionButton
          data-testid={"delete-track-" + id}
          onClick={openDeleteModal}
        >
          <DeleteSvg />
        </ActionButton>
      </ActionItem>
    </ActionButtonsList>
  );
}

export default CardBtns;
