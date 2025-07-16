import { Field } from 'formik'
import styled from 'styled-components'

type bgColorProps = {
  bgColor: string
}

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: calc(4px + (4 - 4) * (100vw - 320px) / (1440 - 320));
  font-size: calc(15px + (22 - 15) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface);
  @media (min-width: 1440px) {
    gap: 7px;
  }
`

export const SelectLabel = styled(Label)`
  padding-right: calc(10px + (16 - 10) * (100vw - 320px) / (1440 - 320));
  border-bottom: calc(1px + (2.5 - 1) * (100vw - 320px) / (1440 - 320)) solid
    var(--color-outline-variant);
`

export const FieldInput = styled(Field)`
  padding: 1px 7px 1px 0;
  font-size: calc(12px + (20 - 12) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface-variant);
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: calc(1px + (2.5 - 1) * (100vw - 320px) / (1440 - 320)) solid
    var(--color-outline-variant);
  transition: border-bottom-color 0.3s;
  &:focus {
    outline: 1px solid transparent;
    border-bottom-color: var(--color-primary);
  }
  &::placeholder {
    color: var(--color-on-surface-variant);
    opacity: 0.5;
  }
`

export const FieldSelect = styled(FieldInput)<bgColorProps>`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 1px;
  background-color: ${({ bgColor }) => bgColor};
  border-bottom: 1px solid transparent;
  &:focus {
    border-bottom-color: transparent;
  }
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`

export const SelectSVGWrapper = styled.div`
  position: absolute;
  right: 4px;
  bottom: 4px;
  transform: translateY(-100%);
  width: calc(7px + (12 - 7) * (100vw - 320px) / (1440 - 320));
  height: calc(7px + (12 - 7) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface);
`
