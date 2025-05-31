import { getTrackBySlug } from "../../../../api/track";

async function getFieldsValues(trackSlug) {
  const { artist, coverImage, title, album, genres } = await getTrackBySlug(
    trackSlug
  );
  const values = {
    artist,
    coverImage: coverImage || "",
    genres: "Rock",
    title,
    album: album || "",
  };

  return { values, genres };
}

export default getFieldsValues;
