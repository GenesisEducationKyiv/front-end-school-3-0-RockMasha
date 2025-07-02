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
  TrackImg,
} from './TrackCard.styled'
import PlaySvg from '../../../../assets/svg/PlaySvg'
import CardBtns from '../../CardBtn/components/CardBtns'
import type { Track } from '@/types'
import defaultTrackImg from '@/assets/images/default_track.png'

interface Props {
  data: Track
  handleClick?: () => void
}

const PlaceholderTrackCard: React.FC<Props> = ({ data, handleClick }) => {
  const { id, title, artist, album, genres, coverImage, slug, audioFile } = data

  return (
    <Card data-testid={`track-item-${id}`}>
      <Controls data-testid={`audio-player-${id}`}>
        <PlayPauseButton
          data-testid={`play-button-${id}`}
          onClick={audioFile && handleClick ? handleClick : undefined}
          disabled={!audioFile}
        >
          <PlaySvg />
        </PlayPauseButton>
      </Controls>
      <TrackImg src={coverImage || defaultTrackImg} loading="lazy" />
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
          style={{ width: '0%' }}
          data-testid={`audio-progress-${id}`}
        />
      </ProgressContainer>
      <CardBtns id={id} slug={slug} />
    </Card>
  )
}

export default PlaceholderTrackCard
