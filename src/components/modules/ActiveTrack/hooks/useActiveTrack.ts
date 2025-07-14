import {
  getActiveTrack,
  listenToActiveTrackUpdates,
  stopListeningToActiveTrackUpdates,
} from '@/api/active-track'
import type { Track } from '@/types'
import { useEffect, useState } from 'react'

function useActiveTrack() {
  const [activeTrack, setActiveTrack] = useState<Track | null>(null)

  const loadInitialTrack = async () => {
    const answer = await getActiveTrack()
    if (answer.isOk()) setActiveTrack(answer.value)
  }

  const handleUpdate = (updatedTrack: Track) => {
    setActiveTrack(updatedTrack)
  }

  useEffect(() => {
    loadInitialTrack()
    listenToActiveTrackUpdates(handleUpdate)
    return () => {
      stopListeningToActiveTrackUpdates(handleUpdate)
    }
  }, [])

  return activeTrack
}

export default useActiveTrack
