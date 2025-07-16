import { Formik } from 'formik'
import {
  ContentBox,
  ContentWrapper,
  OpacityBox,
  OrderWrapper,
  SidePanel,
  SortForm,
} from './SortTracks.styled'
import { type ChangeEvent } from 'react'
import { orderOpinion } from '../consts/orderOpinion'
import { genres } from '../../../api/genres'
import { isValidFilterPayload } from '../helpers/isValidFilterPayload'
import useFilter from '@/shared/hooks/useFilters'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'
import { initialValues } from '../consts/initialValues'
import FormikField from '@/components/UI/FormikField/FormikField'
import { sortOpinion } from '../consts/sortOpinion'

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
                <FormikField
                  signature="Search"
                  data-testid="search-input"
                  name="search"
                  value={search}
                  placeholder="As It Was..."
                  onChange={handleChange}
                />
                <FormikField
                  signature="Genre"
                  type="select"
                  data-testid="filter-genre"
                  name="genre"
                  onChange={handleChange}
                  value={genre}
                  bgColor="var(--color-surface-container-low)"
                >
                  <option key="none" value={''}>
                    none
                  </option>
                  {genres.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </FormikField>
                <FormikField
                  signature="Artist"
                  data-testid="filter-artist"
                  name="artist"
                  onChange={handleChange}
                  value={artist}
                  placeholder="Harry Styles..."
                />
                <OrderWrapper>
                  <FormikField
                    type="select"
                    signature="Sort by"
                    data-testid="sort-select"
                    name="sort"
                    onChange={handleChange}
                    value={sort}
                    bgColor="var(--color-surface-container-low)"
                  >
                    {sortOpinion.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </FormikField>
                  <FormikField
                    type="select"
                    signature="Order"
                    data-testid="sort-select"
                    name="order"
                    onChange={handleChange}
                    value={order}
                    bgColor="var(--color-surface-container-low)"
                  >
                    {orderOpinion.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </FormikField>
                </OrderWrapper>
                <ActionBtn
                  icon="delete"
                  theme="Secondary-sub"
                  minSize={30}
                  maxSize={46}
                  handelClick={clearFilters}
                  data-testid="reset-btn"
                />
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
