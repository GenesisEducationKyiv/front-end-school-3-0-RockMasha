import styled from 'styled-components'

type DeleteModalBtnType = 'yes' | 'no'

type DeleteModalProps = {
  color: DeleteModalBtnType
}

function getColor(color: DeleteModalBtnType) {
  switch (color) {
    case 'yes':
      return 'var(--color-red-100)'
    case 'no':
      return 'var(--color-violet)'
    default:
      return 'var(--color-black)'
  }
}

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Message = styled.h3`
  margin-bottom: calc(25px + (32 - 25) * (100vw - 320px) / (1440 - 320));
  font-size: calc(26px + (42 - 26) * (100vw - 320px) / (1440 - 320));
  font-weight: 600;
  color: var(--color-white);
`

export const SvgWrapper = styled.div`
  width: calc(125px + (220 - 125) * (100vw - 320px) / (1440 - 320));
  height: calc(125px + (220 - 125) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(25px + (30 - 25) * (100vw - 320px) / (1440 - 320));
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Btn = styled.button<DeleteModalProps>`
  padding: calc(5px + (12 - 5) * (100vw - 320px) / (1440 - 320))
    calc(7px + (25 - 10) * (100vw - 320px) / (1440 - 320));
  font-size: calc(20px + (34 - 20) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  background-color: ${({ color }) => getColor(color)};
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
`
