import useIsPlay from './useIsPlay'
import type { AudioRef } from '../types/AudioRef'
import type { SetCurrentPlay } from '../types/SetCurrentPlay'
import type { NullableAudioEl } from '@/types'

interface Props {
  audioRef: AudioRef
  setCurrentPlay: SetCurrentPlay
  currentPlay: NullableAudioEl
}

function usePlayPause({ audioRef, setCurrentPlay, currentPlay }: Props) {
  const { isPlaying, togglePlayPause } = useIsPlay(audioRef)
  const handleTogglePlayPause = async () => {
    if (currentPlay && currentPlay !== audioRef.current) {
      currentPlay.pause()
      setCurrentPlay(null)
    }
    await togglePlayPause()
  }

  return { isPlaying, handleTogglePlayPause }
}

export default usePlayPause
