import styled from 'styled-components'
import { Form } from 'formik'

export const SidePanel = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 50;
  @media (min-width: 768px) {
    width: 28%;
  }
  @media (min-width: 1440px) {
    width: 25%;
  }
`

export const ContentBox = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-width: 420px;
  padding-top: calc(60px + (110 - 60) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-surface-container-low);
  @media (min-width: 768px) {
    max-width: none;
  }
  @supports (-moz-appearance: none) {
    scrollbar-width: thin;
    scrollbar-color: $var(--color-secondary) var(--color-on-secondary);
  }
  &::-webkit-scrollbar {
    width: 9px;
    @media (min-width: 768px) {
      width: 10px;
    }
    @media (min-width: 1440px) {
      width: 12px;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 20px;
    border: 2px solid var(--color-secondary);
    @media (min-width: 1440px) {
      border-width: 2px 20px 2px 2px;
    }
  }
`

export const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 0 25px;
`

export const SortForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
`

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(7px + (12 - 7) * (100vw - 320px) / (1440 - 320));
  margin-top: 10px;
  @media (min-width: 1440px) {
    margin-top: 20px;
  }
`

export const OpacityBox = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: var(--color-opacity);
`
