import { useEffect, useState } from "react";
import { useCardIdentifierValueProviderContext } from "../../../../context/CardIdentifierProvider";
import { genres } from "../../../../api/genres";

function useGenres(currentGenres) {
  const [genresList, setGenresList] = useState([]);
  const [isNotHiddenGenresSelect, setIsNotHiddenGenresSelect] = useState(false);
  const { trackId, trackSlug } = useCardIdentifierValueProviderContext();

  const addGenre = (values) => {
    setGenresList((prev) => {
      const newList = [...prev];
      newList.push(values.genres);
      return newList;
    });
    setIsNotHiddenGenresSelect(false);
  };

  const removeGenre = (event) => {
    const el = event.currentTarget;
    const genre = el.dataset.genre;
    setGenresList((prev) => prev.filter((item) => item !== genre));
  };

  const getFirstValueOfGenresSelect = () => {
    const firstItem = genres.find((item) => !genresList.includes(item));
    setIsNotHiddenGenresSelect(true);
    return firstItem;
  };

  useEffect(() => {
    if (trackId && trackSlug && currentGenres) {
      setGenresList(currentGenres);
    }
  }, [currentGenres]);

  return {
    genresList,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    getFirstValueOfGenresSelect,
  };
}

export default useGenres;
