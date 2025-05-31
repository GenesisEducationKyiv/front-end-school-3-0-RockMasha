function getTrackSrc(file) {
  if (!file) return "";

  const blob = new Blob([file], { type: "audio/mp3" });
  const url = URL.createObjectURL(blob);
  return url;
}

export default getTrackSrc;
