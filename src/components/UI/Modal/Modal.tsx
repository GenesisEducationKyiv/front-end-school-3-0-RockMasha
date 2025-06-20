import { ModalStyled, Wrapper } from './Modal.styled.tsx'
import useLockPage from '../../../shared/hooks/useLockPage.ts'
import type { ChildrenProps, ModalWidth } from '@/types/index.ts'

interface Props extends ChildrenProps {
  width?: ModalWidth
}

function Modal({ children, width }: Props) {
  useLockPage()

  return (
    <Wrapper data-testid="modal">
      <ModalStyled width={width}>{children}</ModalStyled>
    </Wrapper>
  )
}

export default Modal
