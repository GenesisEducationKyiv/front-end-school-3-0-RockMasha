import { createContext, useContext, useState } from "react";
import useHidden from "../../hooks/useHidden";

const SortValueContext = createContext();
const SortChangeContext = createContext();
const SortHiddenContext = createContext();

export function useSortValueContext() {
  return useContext(SortValueContext);
}
export function useSortChangeContext() {
  return useContext(SortChangeContext);
}
export function useSortHiddenContext() {
  return useContext(SortHiddenContext);
}

function SortProvider({ children }) {
  const [filters, setFilters] = useState({
    sort: "title",
    order: "asc",
    search: "",
    genre: "",
    artist: "",
  });
  const hiddenValue = useHidden();

  const updateFilters = (name, value) => {
    setFilters((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <SortValueContext.Provider value={filters}>
      <SortChangeContext value={{ updateFilters, setFilters }}>
        <SortHiddenContext.Provider value={hiddenValue}>
          {children}
        </SortHiddenContext.Provider>
      </SortChangeContext>
    </SortValueContext.Provider>
  );
}

export default SortProvider;
