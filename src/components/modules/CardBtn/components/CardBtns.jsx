import ArrowSvg from "../../../../assets/svg/ArrowSvg";
import DeleteSvg from "../../../../assets/svg/DeleteSvg";
import RedactSvg from "../../../../assets/svg/RedactSvg";
import useCardBtn from "../hooks/useCardBtn";
import {
  ActionButton,
  ActionButtonHidden,
  ActionButtonsList,
  ActionButtonUpload,
  ActionItem,
  ActionItemHidden,
} from "./CardBtns.styled";

function CardBtns({ slug, id }) {
  const { openDeleteModal, openRedactModal, openUploadModal } = useCardBtn({
    slug,
    id,
  });

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
