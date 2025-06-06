import {
  InputFile,
  SubmitBtn,
  Title,
  UnloadBtn,
  UploadBox,
  UploadText,
  UploadWrapper,
  WrapperCloseSvg,
  WrapperUploadSvg,
  Error,
} from './UploadFileModal.styled'
import { Formik } from 'formik'
import { widthModal } from '../consts/widthModal'
import { initialValues } from '../consts/initialValues'
import useUploadFileModal from '../hooks/useUploadFileModal'
import Modal from '../../../../components/UI/Modal/Modal'
import CrossSvg from '../../../../assets/svg/CrossSvg'
import ArrowSvg from '@/assets/svg/ArrowSvg'
import { schemaZod } from '../consts/schemaZod'
import { toFormikValidationSchema } from 'zod-formik-adapter'

function UploadFileModal() {
  const { isFile, submitForm, unloadFile, getUploadFile, closeModal } =
    useUploadFileModal()

  return (
    <Modal width={widthModal}>
      <Formik
        initialValues={initialValues}
        validationSchema={toFormikValidationSchema(schemaZod)}
        onSubmit={submitForm}
      >
        {({ setFieldValue }) => (
          <UploadBox>
            <WrapperCloseSvg onClick={closeModal}>
              <CrossSvg />
            </WrapperCloseSvg>
            <Title>Load File</Title>
            <UploadWrapper>
              <WrapperUploadSvg>
                <InputFile
                  type="file"
                  name="audioFile"
                  accept="audio/*"
                  onChange={(event) => {
                    const file = getUploadFile(event)
                    setFieldValue('audioFile', file)
                  }}
                />
                <ArrowSvg />
              </WrapperUploadSvg>
              <UploadText>file u{isFile ? 'p' : 'n'}loaded</UploadText>
              <Error component="div" name="audioFile" />
            </UploadWrapper>
            {isFile && (
              <UnloadBtn
                onClick={() => {
                  setFieldValue('audioFile', null)
                  unloadFile()
                }}
                type="button"
              >
                Unload
              </UnloadBtn>
            )}
            <SubmitBtn type="submit">Save</SubmitBtn>
          </UploadBox>
        )}
      </Formik>
    </Modal>
  )
}

export default UploadFileModal
