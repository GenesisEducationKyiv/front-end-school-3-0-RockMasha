import { useCallback, useEffect, useState } from "react";
import { useFiltersValueContext } from "../../../context/FiltersProvider";

function useCurrentPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const filters = useFiltersValueContext();

  const resetCurrentPage = useCallback(() => {
    setCurrentPage(0);
  }, []);

  useEffect(() => {
    resetCurrentPage();
  }, [filters, resetCurrentPage]);

  return {
    currentPage,
    setCurrentPage,
    resetCurrentPage,
  };
}

export default useCurrentPage;
