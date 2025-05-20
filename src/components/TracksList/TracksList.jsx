import { useCallback, useEffect, useState } from "react";
import TrackCard from "../TrackCard/TrackCard";
import { Container, List, Section } from "./TracksList.styled";
import { useSortValueContext } from "../SortProvider/SortProvider";
import { getTracks } from "../../service/api";
import {
  useListLoadingProviderContext,
  useLoaderProviderContext,
} from "../LoaderProvider/LoaderProvider";
import { showError } from "../../constans/tosts/showError";
import DefaultElement from "../DefaultElement/DefaultElement";
import ListLoader from "../rep/Loader/ListLoader/ListLoader";
import Pagination from "../Pagination/Pagination";

function TracksList() {
  const { loading } = useLoaderProviderContext();
  const { listLoading, setListLoading } = useListLoadingProviderContext();

  const [list, setList] = useState([]);
  const filters = useSortValueContext();
  const [currentPlay, setCurrentPlay] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const setMusic = useCallback(async () => {
    try {
      setListLoading(true);
      const { data, meta } = await getTracks(filters, currentPage + 1);
      if (data.length === 0 && currentPage !== 0) {
        setCurrentPage((prev) => prev - 1);
        setMusic();
      }
      setList(data);
      setTotalPages(meta.totalPages);
    } catch (error) {
      if (error.message !== "canceled") {
        showError();
      }
    } finally {
      setListLoading(false);
    }
  }, [filters, currentPage, setListLoading]);

  useEffect(() => {
    setCurrentPage(0);
  }, [filters]);

  useEffect(() => {
    setMusic();
  }, [setMusic, currentPage]);

  useEffect(() => {
    if (loading === false) {
      setMusic();
    }
  }, [loading, setCurrentPage, setMusic]);

  useEffect(() => {
    const prevButton = document.querySelector(".page-previous a");
    const nextButton = document.querySelector(".page-next a");
    if (prevButton) {
      prevButton.setAttribute("data-testid", "pagination-prev");
    }
    if (nextButton) {
      nextButton.setAttribute("data-testid", "pagination-next");
    }
  }, [currentPage, totalPages]);

  return (
    <>
      {
        <Section>
          <Container
            style={list.length === 0 ? { justifyContent: "center" } : {}}
          >
            {list.length > 0 ? (
              <List data-loading={listLoading ? "true" : "false"}>
                {list.map((item) => (
                  <TrackCard
                    key={item.id}
                    data={item}
                    setCurrentPlay={setCurrentPlay}
                    currentPlay={currentPlay}
                  />
                ))}
              </List>
            ) : (
              <DefaultElement />
            )}
            {list.length > 0 && totalPages > 1 && (
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            )}
          </Container>
        </Section>
      }
      {listLoading && <ListLoader />}
    </>
  );
}

export default TracksList;
