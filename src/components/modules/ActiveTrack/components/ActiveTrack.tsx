import StarCircle from '@/assets/svg/StarCircle'
import useActiveTrack from '../hooks/useActiveTrack'
import {
  ContentWrapper,
  SvgWrapper,
  Title,
  TrackDetails,
  TrackImg,
  TrackInfo,
  TrackTags,
  TrackTitle,
  TrackWrapper,
  Wrapper,
} from './ActiveTrack.styled'

function ActiveTrack() {
  const data = useActiveTrack()
  if (!data) return
  const { coverImage, title, album, genres, artist } = data

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Active Track ~</Title>
        <TrackWrapper>
          <TrackImg
            src={coverImage || './src/assets/images/default_track.png'}
          />
          <TrackInfo>
            <TrackTitle>{title}</TrackTitle>
            <TrackDetails>Artist: {artist}</TrackDetails>
            <TrackDetails>{`Album: ${album || 'unspecified'}`}</TrackDetails>
            <TrackTags>
              {genres.map((text: string) => '#' + text + ' ')}
            </TrackTags>
          </TrackInfo>
        </TrackWrapper>
      </ContentWrapper>
      <SvgWrapper>
        <StarCircle />
      </SvgWrapper>
    </Wrapper>
  )
}

export default ActiveTrack
