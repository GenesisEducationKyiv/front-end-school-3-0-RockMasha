import { Formik } from 'formik'
import {
  CrossWrapper,
  SubmitBtn,
  TrackItem,
  TrackList,
  GenresTegText,
  WrapperDeleteSVG,
  GenresTegList,
  GenresTegItem,
  TrackSelectBox,
  TrackForm,
  Title,
  ErrorEl,
  GenresBox,
} from './FormTrackModal.styled'
import useFormTrackModal from '../hooks/useFormTrackModal'
import { genres } from '@/api/genres'
import IconSVG from '@/components/UI/IconSVG/IconSVG'
import Modal from '@/components/UI/Modal/Modal'
import { schemaZon } from '../consts/schemaZon'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'
import FormikField from '@/components/UI/FormikField/FormikField'

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
              <IconSVG id="cross" />
            </CrossWrapper>
            <TrackList>
              <TrackItem>
                <FormikField
                  name="input-title"
                  signature="Title"
                  placeholder="As It Was..."
                  data-testid="input-title"
                />
                <ErrorEl
                  component="div"
                  name="title"
                  data-testid="error-title"
                />
              </TrackItem>
              <TrackItem>
                <FormikField
                  name="artist"
                  signature="Artist"
                  placeholder="Kendrick..."
                  data-testid="input-artist"
                />
                <ErrorEl
                  component="div"
                  name="artist"
                  data-testid="error-artist"
                />
              </TrackItem>
              <TrackItem>
                <FormikField
                  name="album"
                  signature="Album"
                  placeholder="One Day..."
                  data-testid="input-album"
                />
                <ErrorEl
                  component="div"
                  name="album"
                  data-testid="error-album"
                />
              </TrackItem>
              <TrackItem>
                <FormikField
                  name="coverImage"
                  signature="Img"
                  placeholder="https://excamp..."
                  data-testid="input-cover-image"
                />
                <ErrorEl
                  component="div"
                  name="coverImage"
                  data-testid="error-coverImage"
                />
              </TrackItem>
            </TrackList>
            <GenresBox>
              Genres
              {currentGenres.length > 0 && (
                <GenresTegList data-testid="form-genres-list">
                  {currentGenres.map((text) => (
                    <GenresTegItem key={text}>
                      <GenresTegText>{'#' + text + ' '}</GenresTegText>
                      <WrapperDeleteSVG
                        data-testid="remove-genre"
                        className="delete-wrap"
                        data-genre={text}
                        onClick={(event) => removeGenre(event)}
                      >
                        <IconSVG id="cross" />
                      </WrapperDeleteSVG>
                    </GenresTegItem>
                  ))}
                </GenresTegList>
              )}
              {isNotHiddenGenresSelect && (
                <TrackSelectBox>
                  <FormikField
                    data-testid="genre-selector"
                    type="select"
                    name="genres"
                    bgcolor="var(--color-surface-container-high)"
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
                  </FormikField>
                  <ActionBtn
                    icon="check"
                    theme="Secondary"
                    minSize={20}
                    maxSize={35}
                    handelClick={() => addGenre(values)}
                    data-testid="open-genre-select"
                  />
                  <ErrorEl
                    component="div"
                    name="genres"
                    data-testid="error-genre"
                  />
                </TrackSelectBox>
              )}
              {!(currentGenres.length >= 4) && (
                <ActionBtn
                  icon="plus"
                  theme="Secondary"
                  minSize={20}
                  maxSize={35}
                  handelClick={() => {
                    const firstItem = getFirstValueOfGenresSelect()
                    setFieldValue('genres', firstItem)
                  }}
                  data-testid="open-genre-select"
                />
              )}
            </GenresBox>
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
