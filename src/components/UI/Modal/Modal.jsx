import { ModalStyled, Wrapper } from "./Modal.styled";
import useLockPage from "../../../shared/hooks/useLockPage";

function Modal({ children, width }) {
  useLockPage();

  return (
    <Wrapper>
      <ModalStyled width={width}>{children}</ModalStyled>
    </Wrapper>
  );
}

export default Modal;
