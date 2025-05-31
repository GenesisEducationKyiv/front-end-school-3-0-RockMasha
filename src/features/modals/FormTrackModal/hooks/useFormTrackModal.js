import useValues from "./useValues";
import useGenres from "./useGenres";
import getFieldsValues from "../helpers/getFieldsValues";
import { useCardIdentifierValueProviderContext } from "../../../../context/CardIdentifierProvider";
import { useEffect, useState } from "react";

function useFormTrackModal() {
  const { trackId, trackSlug } = useCardIdentifierValueProviderContext();
  const [values, setValues] = useState();
  const [currentGenres, setCurrentGenres] = useState();

  const isRedactTrack = trackId && trackSlug;

  const setFieldsValues = async () => {
    const data = await getFieldsValues(trackSlug);
    setValues(data.values);
    setCurrentGenres(data.genres);
  };

  useEffect(() => {
    setFieldsValues();
  }, []);

  const {
    genresList,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    getFirstValueOfGenresSelect,
  } = useGenres(currentGenres);

  const { initialValues, handleSubmit, refuseRedact } = useValues(
    values,
    genresList
  );

  return {
    genresList,
    isNotHiddenGenresSelect,
    addGenre,
    removeGenre,
    initialValues,
    handleSubmit,
    refuseRedact,
    isRedactTrack,
    getFirstValueOfGenresSelect,
  };
}

export default useFormTrackModal;
