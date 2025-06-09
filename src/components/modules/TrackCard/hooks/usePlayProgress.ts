import { useEffect, useState, type ChangeEvent } from 'react'
import type { AudioRef } from '../types/AudioRef'

function usePlayProgress(audioRef: AudioRef) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    const handleTimeUpdate = () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100
      setProgress(progressPercent)
    }
    audio.addEventListener('timeupdate', handleTimeUpdate)
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate)
  }, [audioRef])

  const handleSeek = (event: ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    const newTime = Number(event.target.value)
    audio.currentTime = newTime
    setProgress((newTime / audio.duration) * 100)
  }
  return { progress, handleSeek }
}

export default usePlayProgress
