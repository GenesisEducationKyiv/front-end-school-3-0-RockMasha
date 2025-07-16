import styled from 'styled-components'
import { getHiddenStyle } from '../../../styles/helpers/getHiddenStyle'

export const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: calc(5px + (12 - 5) * (100vw - 320px) / (1440 - 320)) 0;
  background-color: var(--color-surface-container);
  border-bottom: 2px solid var(--color-outline);
  z-index: 60;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(22px + (40 - 22) * (100vw - 320px) / (1440 - 320));
  font-weight: 600;
  color: var(--color-on-surface);
`

export const BurgerSvgWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  width: calc(32px + (50 - 30) * (100vw - 320px) / (1440 - 320));
  height: calc(32px + (50 - 30) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface);
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s;
  @media (min-width: 768px) {
    ${getHiddenStyle()}
  }
  &:hover {
    background-color: var(--color-surface-container-highest);
  }
`
