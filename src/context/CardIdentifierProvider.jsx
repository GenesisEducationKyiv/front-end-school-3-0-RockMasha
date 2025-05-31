import { createContext, useContext, useState } from "react";

const CardIdentifierValueProviderContext = createContext();
const CardIdentifierFuncProviderContext = createContext();

export function useCardIdentifierValueProviderContext() {
  return useContext(CardIdentifierValueProviderContext);
}

export function useCardIdentifierFuncProviderContext() {
  return useContext(CardIdentifierFuncProviderContext);
}

function CardIdentifierProvider({ children }) {
  const [trackId, setTrackId] = useState("");
  const [trackSlug, setTrackSlug] = useState("");

  const clearTrackId = () => {
    setTrackId("");
  };
  const clearTrackSlug = () => {
    setTrackSlug("");
  };

  return (
    <CardIdentifierValueProviderContext.Provider
      value={{ trackId, trackSlug, clearTrackId, clearTrackSlug }}
    >
      <CardIdentifierFuncProviderContext.Provider
        value={{ setTrackSlug, setTrackId }}
      >
        {children}
      </CardIdentifierFuncProviderContext.Provider>
    </CardIdentifierValueProviderContext.Provider>
  );
}

export default CardIdentifierProvider;
