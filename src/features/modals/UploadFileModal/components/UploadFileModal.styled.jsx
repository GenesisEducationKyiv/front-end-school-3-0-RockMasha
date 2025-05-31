import styled from 'styled-components'
import { ErrorMessage, Form } from 'formik'
import { getHiddenStyle } from '../../../../styles/helpers/getHiddenStyle'

export const UploadBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h3`
  margin-bottom: calc(12px + (25 - 12) * (100vw - 320px) / (1440 - 320));
  font-size: calc(20px + (38 - 18) * (100vw - 320px) / (1440 - 320));
  font-weight: 700;
  color: var(--color-white);
`

export const WrapperCloseSvg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
  top: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  right: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  width: calc(30px + (50 - 30) * (100vw - 320px) / (1440 - 320));
  height: calc(30px + (50 - 30) * (100vw - 320px) / (1440 - 320));
`

export const UploadWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
`

export const WrapperUploadSvg = styled.label`
  width: calc(50px + (125 - 50) * (100vw - 320px) / (1440 - 320));
  height: calc(50px + (125 - 50) * (100vw - 320px) / (1440 - 320));
  padding: calc(10px + (30 - 10) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-white-grey);
  border-radius: 5px;
  transform: rotate(-90deg);
`

export const Error = styled(ErrorMessage)`
  position: absolute;
  left: calc(55px + (130 - 50) * (100vw - 320px) / (1440 - 320));
  bottom: 0;
  font-size: calc(12px + (20 - 12) * (100vw - 320px) / (1440 - 320));
  font-weight: 600;
  color: var(--color-red-200);
`

export const InputFile = styled.input`
  ${getHiddenStyle()}
`

export const UploadText = styled.p`
  font-size: calc(14px + (28 - 14) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
`

export const UnloadBtn = styled.button`
  align-self: flex-start;
  padding: calc(3px + (5 - 3) * (100vw - 320px) / (1440 - 320))
    calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(12px + (25 - 12) * (100vw - 320px) / (1440 - 320));
  font-size: calc(12px + (24 - 12) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  background-color: var(--color-purple-500);
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
`

export const SubmitBtn = styled.button`
  align-self: flex-end;
  padding: calc(2px + (5 - 2) * (100vw - 320px) / (1440 - 320))
    calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  font-size: calc(16px + (32 - 16) * (100vw - 320px) / (1440 - 320));
  font-weight: 500;
  color: var(--color-white);
  background-color: var(--color-purple-600);
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
`
