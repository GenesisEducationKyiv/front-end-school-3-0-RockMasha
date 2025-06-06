import LetterSvg from '../../../../assets/svg/LetterSvg'
import Modal from '../../../../components/UI/Modal/Modal'
import useDeleteTrackModal from '../hooks/useDeleteTrackModal'
import {
  Box,
  Btn,
  BtnWrapper,
  SvgWrapper,
  Message,
} from './DeleteTrackModal.styled'

function DeleteTrackModal() {
  const { deleteItem, refuseDeleteItem } = useDeleteTrackModal()

  return (
    <Modal>
      <Box>
        <Message>Delete this Track?</Message>
        <SvgWrapper>
          <LetterSvg />
        </SvgWrapper>
        <BtnWrapper data-testid="confirm-dialog">
          <Btn
            data-testid="cancel-delete"
            onClick={refuseDeleteItem}
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
  )
}

export default DeleteTrackModal
