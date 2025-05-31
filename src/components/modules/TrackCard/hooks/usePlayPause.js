import useIsPlay from "./useIsPlay";

function usePlayPause({ audioRef, setCurrentPlay, currentPlay }) {
  const { isPlaying, togglePlayPause } = useIsPlay(audioRef);
  const handleTogglePlayPause = async () => {
    if (currentPlay && currentPlay !== audioRef.current) {
      currentPlay.pause();
      setCurrentPlay(null);
    }
    await togglePlayPause();
  };

  return { isPlaying, handleTogglePlayPause };
}

export default usePlayPause;
