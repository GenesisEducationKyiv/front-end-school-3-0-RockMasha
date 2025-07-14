import {
  Card,
  Controls,
  PlayPauseButton,
  TrackInfo,
  TrackTitle,
  TrackDetails,
  TrackTags,
  ProgressContainer,
  ProgressBar,
  SeekBar,
  TrackImg,
  TrackImgWrapper,
  TrackDefaultSVGWrapper,
} from './TrackCard.styled'
import CardBtns from '../../CardBtn/components/CardBtns'
import useTrackCard from '../hooks/useTrackCard'
import { useEffect, useRef } from 'react'
import type { AudioRef } from '../types/AudioRef'
import { trackSchema, type NullableAudioEl, type Track } from '@/types'
import type { SetCurrentPlay } from '../types/SetCurrentPlay'
import NoValidCard from './NoValidCard'
import IconSVG from '@/components/UI/IconSVG/IconSVG'

interface Props {
  data: Track
  setCurrentPlay: SetCurrentPlay
  currentPlay: NullableAudioEl
  isPlayNow?: boolean
}

const TrackCard: React.FC<Props> = ({
  data,
  setCurrentPlay,
  currentPlay,
  isPlayNow,
}: Props) => {
  const result = trackSchema.safeParse(data)

  const { id, title, artist, album, genres, coverImage, audioFile, slug } = data
  const audioRef: AudioRef = useRef(null)
  const { file, isPlaying, handleTogglePlayPause, progress, handleSeek } =
    useTrackCard({ audioRef, audioFile, currentPlay, setCurrentPlay })

  useEffect(() => {
    if (isPlayNow) {
      handleTogglePlayPause()
    }
  }, [])

  if (!result.success) return <NoValidCard />
  return (
    <Card data-testid={`track-item-${id}`}>
      <audio ref={audioRef} src={file || undefined} data-testid="audio" />
      <Controls data-testid={`audio-player-${id}`}>
        <PlayPauseButton
          data-testid={`${isPlaying ? 'pause' : 'play'}-button-${id}`}
          onClick={audioFile ? handleTogglePlayPause : undefined}
          disabled={!audioFile}
        >
          {isPlaying ? <IconSVG id="pause" /> : <IconSVG id="play" />}
        </PlayPauseButton>
      </Controls>
      <TrackImgWrapper>
        {coverImage ? (
          <TrackImg src={coverImage} loading="lazy" />
        ) : (
          <TrackDefaultSVGWrapper>
            <IconSVG id="note" />
          </TrackDefaultSVGWrapper>
        )}
      </TrackImgWrapper>
      <TrackInfo>
        <TrackTitle data-testid={`track-item-${id}-title`}>{title}</TrackTitle>
        <TrackDetails data-testid={`track-item-${id}-artist`}>
          Artist: {artist}
        </TrackDetails>
        <TrackDetails>{album && `Album: ${album}`}</TrackDetails>
        <TrackTags>{genres.map((text: string) => '#' + text + ' ')}</TrackTags>
      </TrackInfo>
      <ProgressContainer>
        <ProgressBar
          style={{ width: `${progress}%` }}
          data-testid={`audio-progress-${id}`}
        />
        <SeekBar
          type="range"
          min="0"
          max={`${
            audioRef.current?.duration ? audioRef.current.duration : 100
          }`}
          value={`${
            (progress / 100) *
            (audioRef.current?.duration ? audioRef.current.duration : 100)
          }`}
          onChange={handleSeek}
          disabled={!audioFile}
        />
      </ProgressContainer>
      <CardBtns id={id} slug={slug} />
    </Card>
  )
}

export default TrackCard
