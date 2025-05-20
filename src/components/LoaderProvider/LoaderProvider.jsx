import { createContext, useContext, useState } from "react";

const LoaderProviderContext = createContext();
const ListLoaderProviderContext = createContext();

export function useLoaderProviderContext() {
  return useContext(LoaderProviderContext);
}

export function useListLoadingProviderContext() {
  return useContext(ListLoaderProviderContext);
}

function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [listLoading, setListLoading] = useState(false);
  
  return (
    <LoaderProviderContext.Provider value={{ loading, setLoading }}>
      <ListLoaderProviderContext.Provider
        value={{ listLoading, setListLoading }}
      >
        {children}
      </ListLoaderProviderContext.Provider>
    </LoaderProviderContext.Provider>
  );
}

export default LoaderProvider;
