import { useEffect, useState } from "react";
import getTrackSrc from "../helpers/getTrackSrc";
import { getFile } from "../../../../api/file";
import { showError } from "../../../../shared/helpers/tosts/showError";

function useFile({
  audioRef,
  audioFile,
  isPlaying,
  setCurrentPlay,
  currentPlay,
}) {
  const [file, setFile] = useState("");

  useEffect(() => {
    if (currentPlay && currentPlay !== audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
    if (isPlaying) {
      setCurrentPlay(audioRef.current);
    } else if (currentPlay === audioRef.current) {
      setCurrentPlay(null);
    }
  }, [isPlaying, setCurrentPlay]);

  useEffect(() => {
    setAudio();
    audioRef.current.currentTime = 0;
  }, [audioFile]);

  const setAudio = async () => {
    if (!audioFile) return null;
    try {
      const answer = await getFile(audioFile);
      const fileSrc = getTrackSrc(answer);
      setFile(fileSrc);
    } catch (error) {
      showError(error);
    }
  };

  return { file };
}

export default useFile;
