import styled from 'styled-components'

export const List = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: calc(8px + (15 - 8) * (100vw - 320px) / (1440 - 320));
`
