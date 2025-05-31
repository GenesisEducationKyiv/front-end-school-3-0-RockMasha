import { useCallback, useState } from "react";
import { useFiltersValueContext } from "../../../context/FiltersProvider";
import { getTracks } from "../../../api/track";
import useLoading from "../../../shared/hooks/useLoading";

function useTrackFetch({ currentPage, setCurrentPage }) {
  const filters = useFiltersValueContext();
  const [totalPages, setTotalPages] = useState(0);
  const [list, setList] = useState([]);
  const [listLoading, startListLoading] = useLoading();

  const requestTracks = useCallback(async () => {
    const result = startListLoading(async () => {
      const { data, meta } = await getTracks(filters, currentPage + 1);
      if (data.length === 0 && currentPage !== 0) {
        setCurrentPage(currentPage - 1);
        return requestTracks();
      }
      return { data, totalPages: meta.totalPages };
    });
    return result;
  }, [filters, currentPage, setCurrentPage, startListLoading]);

  const fetchTracks = useCallback(async () => {
    const answer = await requestTracks();
    setList(answer ? answer.data : []);
    setTotalPages(answer ? answer.totalPages : 0);
  }, [requestTracks, setList, setTotalPages]);

  return { fetchTracks, list, listLoading, totalPages };
}

export default useTrackFetch;
