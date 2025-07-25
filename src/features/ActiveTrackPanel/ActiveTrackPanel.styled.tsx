import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(32px + (47 - 32) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-surface-container);
  border-radius: 10px;
  border: calc(2px + (4 - 2) * (100vw - 320px) / (1440 - 320)) solid
    var(--color-outline-variant);
`

export const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: calc(7px + (11 - 7) * (100vw - 320px) / (1440 - 320))
    calc(10px + (40 - 10) * (100vw - 320px) / (1440 - 320));
  font-size: calc(14px + (20 - 14) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface);
  background-color: var(--color-surface-container);
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

export const SvgCrossWrapper = styled.button`
  position: absolute;
  top: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  right: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  display: flex;
  align-items: center;
  width: calc(15px + (25 - 15) * (100vw - 320px) / (1440 - 320));
  height: calc(15px + (25 - 15) * (100vw - 320px) / (1440 - 320));
  padding: 0;
  color: var(--color-on-surface);
  background-color: transparent;
  border: 1px solid transparent;
`
