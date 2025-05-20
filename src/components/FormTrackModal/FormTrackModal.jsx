import { Formik, useFormikContext } from "formik";
import {
  CrossWrapper,
  Label,
  SubmitBtn,
  TrackField,
  TrackItem,
  TrackList,
  TrackSelect,
  GenresTegText,
  WrapperDeleteSVG,
  WrapperSVG,
  GenresTegList,
  GenresTegItem,
  TrackSelectBox,
  SelectLabel,
  TrackForm,
  Title,
  ErrorEl,
} from "./FormTrackModal.styled";
import PlusSvg from "../../svg/PlusSvg";
import Modal from "../rep/Modal/Modal";
import CrossSvg from "../../svg/CrossSvg";
import { useEffect, useState } from "react";
import { object, string } from "yup";
import { genres } from "../../constans/genres";
import CheckSvg from "../../svg/CheckSvg";
import { getOneTrack, postTrack, redactTrack } from "../../service/api";
import { useModalFuncContext } from "../ModalProvider/ModalProvider";
import { useLoaderProviderContext } from "../LoaderProvider/LoaderProvider";
import { useCardValueProviderContext } from "../CardProvider/CardProvider";
import { showSuccess } from "../../constans/tosts/showSuccess";
import { showError } from "../../constans/tosts/showError";
import getErrorMessage from "../../constans/getErrorMessage";

const isImageUrl = async (url) => {
  try {
    const response = await fetch(url, { method: "HEAD" });
    const contentType = response.headers.get("Content-Type");
    return contentType?.startsWith("image/");
  } catch (error) {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }
};
const startValues = {
  title: "",
  genres: "Rock",
  artist: "",
  album: "",
  coverImage: "",
};
const schemaYup = object({
  title: string()
    .max(25, "Maximum number of characters 25")
    .required("Field is required"),
  artist: string()
    .max(25, "Maximum number of characters 25")
    .required("Field is required"),
  album: string()
    .max(25, "Maximum number of characters 25")
    .min(2, "Min value must have 2 symbol"),
  genre: string().oneOf(genres),
  coverImage: string()
    .url("This don't url")
    .test("is-image", "URL don't to img", async (value) => {
      if (!value) return true;
      return await isImageUrl(value);
    }),
});

function FormTrackModal() {
  const [initialValues, setInitialValues] = useState(startValues);
  const { trackId, trackSlug, clearTrackId, clearTrackSlug } =
    useCardValueProviderContext();

  const [genresSelect, setGenresSelect] = useState(false);
  const [genresList, setGenresList] = useState([]);
  const { setFormTrack } = useModalFuncContext();
  const { setLoading } = useLoaderProviderContext();

  const closeModal = () => {
    setFormTrack(false);
  };

  const addGenre = (values) => {
    setGenresList((prev) => {
      const newList = [...prev];
      newList.push(values.genres);
      return newList;
    });
    setGenresSelect(false);
  };

  const removeGenre = (event) => {
    const el = event.currentTarget;
    const genre = el.dataset.genre;
    setGenresList((prev) => prev.filter((item) => item !== genre));
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      closeModal();
      setLoading(true);
      const data = { ...values, genres: genresList };
      if (trackId) {
        await redactTrack(data, trackId);
      } else {
        await postTrack(data);
      }
      showSuccess();
    } catch (error) {
      showError(getErrorMessage(error));
    } finally {
      resetForm();
      setLoading(false);
      clearTrackId();
      clearTrackSlug();
    }
  };

  const setFields = async () => {
    const { artist, coverImage, title, album, genres } = await getOneTrack(
      trackSlug
    );
    const values = {
      artist,
      coverImage: coverImage || "",
      genres: "Rock",
      title,
      album: album || "",
    };
    setGenresList(genres);
    setInitialValues(values);
  };

  useEffect(() => {
    if (trackId && trackSlug) {
      setFields();
    }
  }, []);

  const Updater = () => {
    const { resetForm } = useFormikContext();
    useEffect(() => {
      resetForm({ values: initialValues });
    }, [initialValues]);
    return null;
  };

  return (
    <Modal>
      <Formik
        validationSchema={schemaYup}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <TrackForm data-testid="track-form">
            <Title>{trackId ? "Redact Track" : "Create Track"}</Title>
            <CrossWrapper
              onClick={() => {
                closeModal();
                clearTrackId();
                clearTrackSlug();
              }}
            >
              <CrossSvg />
            </CrossWrapper>
            <TrackList>
              <TrackItem>
                <Label>
                  Title
                  <TrackField data-testid="input-title" name="title" />
                </Label>
                <ErrorEl
                  component="div"
                  name="title"
                  data-testid="error-title"
                />
              </TrackItem>
              <TrackItem>
                <Label>
                  Artist
                  <TrackField data-testid="input-artist" name="artist" />
                </Label>
                <ErrorEl
                  component="div"
                  name="artist"
                  data-testid="error-artist"
                />
              </TrackItem>
              <TrackItem>
                <Label>
                  Album
                  <TrackField data-testid="input-album" name="album" />
                </Label>
                <ErrorEl
                  component="div"
                  name="album"
                  data-testid="error-album"
                />
              </TrackItem>
              <TrackItem>
                <Label>
                  Img
                  <TrackField
                    data-testid="input-cover-image"
                    name="coverImage"
                  />
                </Label>
                <ErrorEl
                  component="div"
                  name="coverImage"
                  data-testid="error-coverImage"
                />
              </TrackItem>
            </TrackList>
            <SelectLabel>
              Genres
              <GenresTegList>
                {genresList.map((text) => (
                  <GenresTegItem key={text}>
                    <GenresTegText>{"#" + text + " "}</GenresTegText>
                    <WrapperDeleteSVG
                      className="delete-wrap"
                      data-genre={text}
                      onClick={(event) => removeGenre(event)}
                    >
                      <CrossSvg />
                    </WrapperDeleteSVG>
                  </GenresTegItem>
                ))}
              </GenresTegList>
              {genresSelect && (
                <TrackSelectBox>
                  <TrackSelect
                    data-testid="genre-selector"
                    component="select"
                    name="genres"
                  >
                    {genres.map((item) => {
                      return (
                        !genresList.includes(item) && (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        )
                      );
                    })}
                  </TrackSelect>
                  <WrapperSVG onClick={() => addGenre(values)}>
                    <CheckSvg />
                  </WrapperSVG>
                  <ErrorEl
                    component="div"
                    name="genres"
                    data-testid="error-genre"
                  />
                </TrackSelectBox>
              )}
              {!(genresList.length >= 4) && (
                <WrapperSVG
                  type="button"
                  onClick={() => {
                    const firstItem = genres.find(
                      (item) => !genresList.includes(item)
                    );
                    setGenresSelect(true);
                    setFieldValue("genres", firstItem);
                  }}
                >
                  <PlusSvg />
                </WrapperSVG>
              )}
            </SelectLabel>
            <SubmitBtn type="submit" data-testid="submit-button">
              {trackId ? "Redact" : "Create"}
            </SubmitBtn>
          </TrackForm>
        )}
      </Formik>
    </Modal>
  );
}

export default FormTrackModal;
