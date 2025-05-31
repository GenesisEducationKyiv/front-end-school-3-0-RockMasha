import { createContext, useContext } from "react";
import useLoading from "../shared/hooks/useLoading";

const LoaderProviderContext = createContext();

export function useLoaderProviderContext() {
  return useContext(LoaderProviderContext);
}

function LoaderProvider({ children }) {
  const [loading, startLoading] = useLoading(true);

  return (
    <LoaderProviderContext.Provider value={{ loading, startLoading }}>
      {children}
    </LoaderProviderContext.Provider>
  );
}

export default LoaderProvider;
