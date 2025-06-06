import { Formik } from 'formik'
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
} from './FormTrackModal.styled'
import useFormTrackModal from '../hooks/useFormTrackModal'
import { genres } from '../../../../api/genres'
import CrossSvg from '../../../../assets/svg/CrossSvg'
import CheckSvg from '../../../../assets/svg/CheckSvg'
import PlusSvg from '../../../../assets/svg/PlusSvg'
import Modal from '../../../../components/UI/Modal/Modal'
import { schemaZon } from '../consts/schemaZon'
import { toFormikValidationSchema } from 'zod-formik-adapter'

function FormTrackModal() {
  const {
    currentGenres,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    initialValues,
    handleSubmit,
    refuseRedact,
    isRedactTrack,
    getFirstValueOfGenresSelect,
  } = useFormTrackModal()

  return (
    <Modal>
      <Formik
        validationSchema={toFormikValidationSchema(schemaZon)}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ values, setFieldValue }) => (
          <TrackForm data-testid="track-form">
            <Title>{isRedactTrack ? 'Redact Track' : 'Create Track'}</Title>
            <CrossWrapper onClick={refuseRedact}>
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
                {currentGenres.map((text) => (
                  <GenresTegItem key={text}>
                    <GenresTegText>{'#' + text + ' '}</GenresTegText>
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
              {isNotHiddenGenresSelect && (
                <TrackSelectBox>
                  <TrackSelect
                    data-testid="genre-selector"
                    component="select"
                    name="genres"
                  >
                    {genres.map((item) => {
                      return (
                        !currentGenres.includes(item) && (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        )
                      )
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
              {!(currentGenres.length >= 4) && (
                <WrapperSVG
                  onClick={() => {
                    const firstItem = getFirstValueOfGenresSelect()
                    setFieldValue('genres', firstItem)
                  }}
                >
                  <PlusSvg />
                </WrapperSVG>
              )}
            </SelectLabel>
            <SubmitBtn type="submit" data-testid="submit-button">
              {isRedactTrack ? 'Redact' : 'Create'}
            </SubmitBtn>
          </TrackForm>
        )}
      </Formik>
    </Modal>
  )
}

export default FormTrackModal
