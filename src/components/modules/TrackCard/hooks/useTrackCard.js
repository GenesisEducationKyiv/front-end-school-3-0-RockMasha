import usePlayProgress from "./usePlayProgress";
import usePlayPause from "./usePlayPause";
import useFile from "./useFile";

function useTrackCard({ audioRef, audioFile, currentPlay, setCurrentPlay }) {
  const { progress, handleSeek } = usePlayProgress(audioRef);

  const { isPlaying, handleTogglePlayPause } = usePlayPause({
    audioRef,
    setCurrentPlay,
    currentPlay,
  });
  const { file } = useFile({
    audioRef,
    audioFile,
    isPlaying,
    setCurrentPlay,
    currentPlay,
  });

  return {
    audioRef,
    file,
    isPlaying,
    handleTogglePlayPause,
    progress,
    handleSeek,
  };
}

export default useTrackCard;
