import { Formik } from 'formik'
import {
  ContentBox,
  ContentWrapper,
  Label,
  OpacityBox,
  OrderWrapper,
  ResetBtn,
  SelectSVGWrapper,
  SidePanel,
  SortField,
  SortForm,
  SortSelect,
} from './SortTracks.styled'
import { type ChangeEvent } from 'react'
import { initialValues } from '../consts/initialValues'
import { sortOpinion } from '../consts/sortOpinion'
import { orderOpinion } from '../consts/orderOpinion'
import { genres } from '../../../api/genres'
import { isValidFilterPayload } from '../helpers/isValidFilterPayload'
import useFilter from '@/shared/hooks/useFilters'
import IconSVG from '@/components/UI/IconSVG/IconSVG'

type FilterEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>

const SortTracks: React.FC = () => {
  const { filters, updateFilters, clearFilters } = useFilter()
  const { search, genre, artist, sort, order } = filters

  const handleChange = (event: FilterEvent) => {
    const { name, value } = event.target
    const payload = { name, value }
    if (isValidFilterPayload(payload)) {
      updateFilters(payload)
    }
  }

  return (
    <>
      <SidePanel>
        <ContentBox>
          <ContentWrapper>
            <Formik initialValues={initialValues} onSubmit={() => {}}>
              <SortForm>
                <Label>
                  Search
                  <SortField
                    data-testid="search-input"
                    onChange={handleChange}
                    name="search"
                    value={search}
                    placeholder="As It Was..."
                  />
                </Label>
                <Label>
                  Genre
                  <SortSelect
                    data-testid="filter-genre"
                    component="select"
                    name="genre"
                    onChange={handleChange}
                    value={genre}
                  >
                    <option key="none" value={''}>
                      none
                    </option>
                    {genres.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </SortSelect>
                  <SelectSVGWrapper>
                    <IconSVG id="select-arrow" />
                  </SelectSVGWrapper>
                </Label>
                <Label>
                  Artist
                  <SortField
                    data-testid="filter-artist"
                    name="artist"
                    onChange={handleChange}
                    value={artist}
                    placeholder="Harry Styles..."
                  />
                </Label>
                <OrderWrapper>
                  <Label>
                    Sort by
                    <SortSelect
                      data-testid="sort-select"
                      name="sort"
                      component="select"
                      onChange={handleChange}
                      value={sort}
                    >
                      {sortOpinion.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </SortSelect>
                    <SelectSVGWrapper>
                      <IconSVG id="select-arrow" />
                    </SelectSVGWrapper>
                  </Label>
                  <Label>
                    Order
                    <SortSelect
                      data-testid="sort-select"
                      name="order"
                      component="select"
                      onChange={handleChange}
                      value={order}
                    >
                      {orderOpinion.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </SortSelect>
                    <SelectSVGWrapper>
                      <IconSVG id="select-arrow" />
                    </SelectSVGWrapper>
                  </Label>
                </OrderWrapper>
                <ResetBtn
                  data-testid="reset-btn"
                  type="button"
                  onClick={clearFilters}
                >
                  <IconSVG id="delete" />
                </ResetBtn>
              </SortForm>
            </Formik>
          </ContentWrapper>
        </ContentBox>
        <OpacityBox />
      </SidePanel>
    </>
  )
}

export default SortTracks
