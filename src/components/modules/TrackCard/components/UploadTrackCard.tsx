import { useState, lazy, Suspense } from 'react'
import type { Track, NullableAudioEl } from '@/types'
import type { SetCurrentPlay } from '../types/SetCurrentPlay'
import NoValidCard from './NoValidCard'
import { trackSchema } from '@/types'
import PlaceholderTrackCard from './PlaceholderTrackCard'

const TrackCard = lazy(() => import('./TrackCard'))

interface Props {
  data: Track
  setCurrentPlay: SetCurrentPlay
  currentPlay: NullableAudioEl
}

const UploadTrackCard: React.FC<Props> = ({
  data,
  setCurrentPlay,
  currentPlay,
}) => {
  const result = trackSchema.safeParse(data)

  const [isClickedPlay, setIsClickedPlay] = useState(false)

  const handlePlayClick = () => {
    if (data.audioFile) {
      setIsClickedPlay(true)
    }
  }

  if (!result.success) {
    return <NoValidCard />
  }

  if (isClickedPlay) {
    return (
      <Suspense fallback={<PlaceholderTrackCard data={data} />}>
        <TrackCard
          data={data}
          setCurrentPlay={setCurrentPlay}
          currentPlay={currentPlay}
          іsPlayNow={true}
        />
      </Suspense>
    )
  }
  
  return <PlaceholderTrackCard data={data} handleClick={handlePlayClick} />
}

export default UploadTrackCard
