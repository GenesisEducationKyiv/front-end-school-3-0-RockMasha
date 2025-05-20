import { createContext, useContext, useState } from "react";

const CardValueProviderContext = createContext();
const CardFuncProviderContext = createContext();

export function useCardValueProviderContext() {
  return useContext(CardValueProviderContext);
}

export function useCardFuncProviderContext() {
  return useContext(CardFuncProviderContext);
}

function CardProvider({ children }) {
  const [trackId, setTrackId] = useState("");
  const [trackSlug, setTrackSlug] = useState("");

  const clearTrackId = () => {
    setTrackId("");
  };
  const clearTrackSlug = () => {
    setTrackSlug("");
  };

  return (
    <CardValueProviderContext.Provider
      value={{ trackId, trackSlug, clearTrackId, clearTrackSlug }}
    >
      <CardFuncProviderContext value={{ setTrackSlug, setTrackId }}>
        {children}
      </CardFuncProviderContext>
    </CardValueProviderContext.Provider>
  );
}

export default CardProvider;
