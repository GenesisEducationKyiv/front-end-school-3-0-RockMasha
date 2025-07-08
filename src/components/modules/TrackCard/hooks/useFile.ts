import { useEffect, useState } from 'react'
import getTrackSrc from '../helpers/getTrackSrc'
import { getFile } from '../../../../api/file'
import { showError } from '../../../../shared/helpers/tosts/showError'
import type { AudioRef } from '../types/AudioRef'
import type { AudioFile, NullableAudioEl } from '@/types'
import type { SetCurrentPlay } from '../types/SetCurrentPlay'

interface Props {
  audioRef: AudioRef
  audioFile: AudioFile | undefined
  isPlaying: boolean
  setCurrentPlay: SetCurrentPlay
  currentPlay: NullableAudioEl
}

function useFile({
  audioRef,
  audioFile,
  isPlaying,
  setCurrentPlay,
  currentPlay,
}: Props) {
  const [file, setFile] = useState('')

  useEffect(() => {
    if (currentPlay && currentPlay !== audioRef.current && isPlaying) {
      audioRef?.current?.pause()
    }
    if (isPlaying) {
      setCurrentPlay(audioRef.current)
    } else if (currentPlay === audioRef.current) {
      setCurrentPlay(null)
    }
  }, [isPlaying, setCurrentPlay])

  const setAudio = async () => {
    if (!audioFile) return
    const answer = await getFile(audioFile)
    if (!answer.isOk()) {
      showError(answer.error)
      return
    }
    const response = answer.value
    const fileSrc = getTrackSrc(response)
    setFile(fileSrc)
  }

  useEffect(() => {
    if (!audioFile) return
    setAudio()
  }, [audioFile])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
    }
  }, [audioFile])

  return { file }
}

export default useFile
