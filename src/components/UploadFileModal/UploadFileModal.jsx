import ArrowSvg from "../../svg/ArrowSvg";
import CrossSvg from "../../svg/CrossSvg";
import Modal from "../rep/Modal/Modal";
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
} from "./UploadFileModal.styled";
import { mixed, object } from "yup";
import { useEffect, useState } from "react";
import { deleteFile, getOneTrack, postFile } from "../../service/api";
import { useCardValueProviderContext } from "../CardProvider/CardProvider";
import { useModalFuncContext } from "../ModalProvider/ModalProvider";
import { useLoaderProviderContext } from "../LoaderProvider/LoaderProvider";
import { Formik } from "formik";
import { showSuccess } from "../../constans/tosts/showSuccess";
import { showError } from "../../constans/tosts/showError";

const width = {
  base: "70%",
  tablet: "500px",
  desktop: "600px",
};
const initialValues = {
  audioFile: null,
};
const schemaYup = object({
  audioFile: mixed()
    .nullable()
    .optional()
    .test(
      "file-not-null",
      "Please select a file",
      (value) => value !== null && value !== undefined
    )
    .test(
      "file-exists",
      "Please select a file.",
      (value) => !value || value instanceof File
    )
    .test(
      "file-type",
      "Only audio files are allowed",
      (value) =>
        !value ||
        (value instanceof File &&
          ["audio/mpeg", "audio/wav", "audio/ogg"].includes(value.type))
    )
    .test(
      "file-size",
      "File size must be less than 10MB.",
      (value) =>
        !value || (value instanceof File && value.size <= 10 * 1024 * 1024)
    ),
});

function UploadFileModal() {
  const { trackId, trackSlug, clearTrackId, clearTrackSlug } =
    useCardValueProviderContext();
  const { setUploadFile } = useModalFuncContext();
  const { setLoading } = useLoaderProviderContext();
  const [isFile, setIsFile] = useState();
  const [isBackFile, setIsBackFile] = useState();

  const submitForm = async (values) => {
    try {
      setLoading(true);
      closeModal();
      await postFile(values, trackId);
      clearTrackId();
      clearTrackSlug();
      showSuccess();
    } catch (error) {
      console.log(error);
      showError();
    } finally {
      setLoading(false);
    }
  };

  const unloadFile = async () => {
    if (isBackFile) {
      try {
        setLoading(true);
        await deleteFile(trackId);
        setLoading(false);
        setIsBackFile(false);
        showSuccess();
      } catch (error) {
        console.log(error);
        showError();
      }
    }
    setIsFile(false);
  };

  useEffect(() => {
    getFile();
  }, []);

  const getFile = async () => {
    const answer = await getOneTrack(trackSlug);
    if (answer.audioFile) {
      setIsFile(true);
      setIsBackFile(true);
    }
  };

  const closeModal = () => {
    setUploadFile(false);
  };

  return (
    <Modal width={width}>
      <Formik
        initialValues={initialValues}
        validationSchema={schemaYup}
        onSubmit={submitForm}
      >
        {({ setFieldValue }) => (
          <UploadBox>
            <WrapperCloseSvg
              onClick={() => {
                clearTrackId();
                clearTrackSlug();
                closeModal();
              }}
            >
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
                    const file = event.target.files[0];
                    setFieldValue("audioFile", file);
                    setIsFile(true);
                  }}
                />
                <ArrowSvg />
              </WrapperUploadSvg>
              <UploadText>file u{isFile ? "p" : "n"}loaded</UploadText>
              <Error component="div" name="audioFile" />
            </UploadWrapper>
            {isFile && (
              <UnloadBtn
                onClick={() => {
                  setFieldValue("audioFile", null);
                  unloadFile();
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
  );
}

export default UploadFileModal;
