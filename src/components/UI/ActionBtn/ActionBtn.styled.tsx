import type { Theme } from '@/types'
import styled from 'styled-components'

interface ButtonProps {
  theme: Theme
  size: [number, number]
}

function getBgColor(theme: Theme) {
  switch (theme) {
    case 'Primary':
      return 'var(--color-primary)'
    case 'Primary-sub':
      return 'var(--color-primary-container)'
    case 'Secondary':
      return 'var(--color-secondary)'
    case 'Secondary-sub':
      return 'var(--color-secondary-container)'
    case 'Tertiary':
      return 'var(--color-tertiary)'
    case 'Tertiary-sub':
      return 'var(--color-tertiary-container)'
  }
}

function getIconColor(theme: Theme) {
  switch (theme) {
    case 'Primary':
      return 'var(--color-on-primary)'
    case 'Primary-sub':
      return 'var(--color-on-primary-container)'
    case 'Secondary':
      return 'var(--color-on-secondary)'
    case 'Secondary-sub':
      return 'var(--color-on-secondary-container)'
    case 'Tertiary':
      return 'var(--color-on-tertiary'
    case 'Tertiary-sub':
      return 'var(--color-on-tertiary-container'
  }
}

export const Button = styled.div<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) =>
    `calc(${size[0]}px + (${size[1]} - ${size[0]}) * (100vw - 320px) / (1440 - 320))`};
  height: ${({ size }) =>
    `calc(${size[0]}px + (${size[1]} - ${size[0]}) * (100vw - 320px) / (1440 - 320))`};
  padding: 0;
  color: ${({ theme }) => getIconColor(theme)};
  background-color: ${({ theme }) => getBgColor(theme)};
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));;
  cursor: pointer;
`

export const WrapperSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55%;
  height: 55%;
`
