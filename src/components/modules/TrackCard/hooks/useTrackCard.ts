import usePlayProgress from './usePlayProgress'
import usePlayPause from './usePlayPause'
import useFile from './useFile'
import type { AudioRef } from '../types/AudioRef'
import type { AudioFile, NullableAudioEl } from '@/types'
import type { SetCurrentPlay } from '../types/SetCurrentPlay'

interface Props {
  audioRef: AudioRef
  audioFile: AudioFile | undefined
  currentPlay: NullableAudioEl
  setCurrentPlay: SetCurrentPlay
}

function useTrackCard({
  audioRef,
  audioFile,
  currentPlay,
  setCurrentPlay,
}: Props) {
  const { progress, handleSeek } = usePlayProgress(audioRef)

  const { isPlaying, handleTogglePlayPause } = usePlayPause({
    audioRef,
    setCurrentPlay,
    currentPlay,
  })
  const { file } = useFile({
    audioRef,
    audioFile,
    isPlaying,
    setCurrentPlay,
    currentPlay,
  })

  return {
    audioRef,
    file,
    isPlaying,
    handleTogglePlayPause,
    progress,
    handleSeek,
  }
}

export default useTrackCard
