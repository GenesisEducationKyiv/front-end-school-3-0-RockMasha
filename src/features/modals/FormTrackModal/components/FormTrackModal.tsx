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
  GenresTegList,
  GenresTegItem,
  TrackSelectBox,
  SelectLabel,
  TrackForm,
  Title,
  ErrorEl,
} from './FormTrackModal.styled'
import useFormTrackModal from '../hooks/useFormTrackModal'
import { genres } from '@/api/genres'
import IconSVG from '@/components/UI/IconSVG/IconSVG'
import Modal from '@/components/UI/Modal/Modal'
import { schemaZon } from '../consts/schemaZon'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'

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
                <Label>
                  Title
                  <TrackField
                    data-testid="input-title"
                    name="title"
                    placeholder="As It Was..."
                  />
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
                  <TrackField
                    data-testid="input-artist"
                    name="artist"
                    placeholder="Kendrick..."
                  />
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
                  <TrackField
                    data-testid="input-album"
                    name="album"
                    placeholder="One Day..."
                  />
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
                    placeholder="https://excamp..."
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
