import { Formik } from "formik";
import {
  ContentBox,
  ContentWrapper,
  Label,
  OpacityBox,
  OrderWrapper,
  ResetBtn,
  SidePanel,
  SortField,
  SortForm,
  SortSelect,
} from "./SortTracks.styled";
import { useCallback } from "react";
import { initialValues } from "../consts/initialValues";
import { sortOpinion } from "../consts/sortOpinion";
import { orderOpinion } from "../consts/orderOpinion";
import DeleteSvg from "../../../assets/svg/DeleteSvg";
import { genres } from "../../../api/genres";
import {
  useFiltersChangeContext,
  useFiltersValueContext,
} from "../../../context/FiltersProvider";

function SortTracks() {
  const { updateFilters, setFilters } = useFiltersChangeContext();
  const { search, genre, artist, sort, order } = useFiltersValueContext();
  const handelChange = (event) => {
    const { name, value } = event.target;
    updateFilters(name, value);
  };

  const resetForm = useCallback(() => {
    setFilters(initialValues);
  }, [setFilters]);

  return (
    <>
      <SidePanel>
        <ContentBox>
          <ContentWrapper>
            <Formik initialValues={initialValues}>
              <SortForm>
                <Label>
                  Search
                  <SortField
                    data-testid="search-input"
                    onChange={handelChange}
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
                    onChange={handelChange}
                    value={genre}
                  >
                    <option key="none" value={""}>
                      none
                    </option>
                    {genres.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </SortSelect>
                </Label>
                <Label>
                  Artist
                  <SortField
                    data-testid="filter-artist"
                    name="artist"
                    onChange={handelChange}
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
                      onChange={handelChange}
                      value={sort}
                    >
                      {sortOpinion.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </SortSelect>
                  </Label>
                  <Label>
                    Order
                    <SortSelect
                      data-testid="sort-select"
                      name="order"
                      component="select"
                      onChange={handelChange}
                      value={order}
                    >
                      {orderOpinion.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </SortSelect>
                  </Label>
                </OrderWrapper>
                <ResetBtn type="button" onClick={resetForm}>
                  <DeleteSvg />
                </ResetBtn>
              </SortForm>
            </Formik>
          </ContentWrapper>
        </ContentBox>
        <OpacityBox />
      </SidePanel>
    </>
  );
}

export default SortTracks;
