import { createContext, useContext, useState } from "react";
import useHidden from "../shared/hooks/useHidden";

const FiltersValueContext = createContext();
const FiltersChangeContext = createContext();
const FiltersHiddenContext = createContext();

export function useFiltersValueContext() {
  return useContext(FiltersValueContext);
}
export function useFiltersChangeContext() {
  return useContext(FiltersChangeContext);
}
export function useFiltersHiddenContext() {
  return useContext(FiltersHiddenContext);
}

function FiltersProvider({ children }) {
  const [filters, setFilters] = useState({
    sort: "title",
    order: "asc",
    search: "",
    genre: "",
    artist: "",
  });

  const updateFilters = (name, value) => {
    setFilters((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const hiddenValue = useHidden();

  return (
    <FiltersValueContext.Provider value={filters}>
      <FiltersChangeContext value={{ updateFilters, setFilters }}>
        <FiltersHiddenContext.Provider value={hiddenValue}>
          {children}
        </FiltersHiddenContext.Provider>
      </FiltersChangeContext>
    </FiltersValueContext.Provider>
  );
}

export default FiltersProvider;
