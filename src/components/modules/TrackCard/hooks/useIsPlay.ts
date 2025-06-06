import { useState, useEffect } from 'react'
import type { AudioRef } from '../types/AudioRef'

function useIsPlay(audioRef: AudioRef) {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const togglePlayPause = async () => {
    const audio = audioRef?.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      await audio.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const audio = audioRef?.current
    if (!audio) return
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => setIsPlaying(false)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audioRef])

  return { isPlaying, togglePlayPause }
}

export default useIsPlay
