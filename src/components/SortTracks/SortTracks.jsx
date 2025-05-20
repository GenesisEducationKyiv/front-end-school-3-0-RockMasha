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
import { genres } from "../../constans/genres";
import DeleteSvg from "../../svg/DeleteSvg";
import {
  useSortChangeContext,
  useSortValueContext,
} from "../SortProvider/SortProvider";
import { useCallback } from "react";

const orderOpinion = ["asc", "desc"];
const sortOpinion = ["title", "artist", "album", "createdAt"];
const initialValues = {
  search: "",
  genre: "",
  artist: "",
  sort: "title",
  order: "asc",
};

function SortTracks() {
  const { updateFilters, setFilters } = useSortChangeContext();
  const { search, genre, artist, sort, order } = useSortValueContext();
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
