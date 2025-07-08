import styled from 'styled-components'

export const ImgWrapper = styled.div`
  width: calc(100px + (150 - 60) * (100vw - 320px) / (1440 - 320));
  height: calc(100px + (150 - 60) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
`

export const Text = styled.p`
  font-size: calc(18px + (30 - 16) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
`
