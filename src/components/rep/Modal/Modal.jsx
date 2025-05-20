import { useEffect } from "react";
import { ModalStyled, Wrapper } from "./Modal.styled";

function Modal({ children, width }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <Wrapper>
      <ModalStyled width={width}>{children}</ModalStyled>
    </Wrapper>
  );
}

export default Modal;
