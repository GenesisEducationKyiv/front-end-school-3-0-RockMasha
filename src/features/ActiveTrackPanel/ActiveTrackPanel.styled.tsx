import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(32px + (47 - 32) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-purple-300);
  border-radius: 10px;
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: calc(7px + (11 - 7) * (100vw - 320px) / (1440 - 320))
    calc(10px + (40 - 10) * (100vw - 320px) / (1440 - 320));
  font-size: calc(14px + (20 - 14) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  background-color: var(--color-purple-300);
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    white-space: nowrap;
  }
  :disabled {
    cursor: wait;
  }
`

export const SvgCrossWrapper = styled.div`
  position: absolute;
  top: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  right: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  display: flex;
  align-items: center;
  width: calc(15px + (25 - 15) * (100vw - 320px) / (1440 - 320));
  height: calc(15px + (25 - 15) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  cursor: pointer;
`
