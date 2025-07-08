import IconSVG from '@/components/UI/IconSVG/IconSVG'
import useActiveTrack from '../hooks/useActiveTrack'
import {
  ContentWrapper,
  SvgWrapper,
  Title,
  TrackDetails,
  TrackImg,
  TrackImgWrapper,
  TrackInfo,
  TrackTags,
  TrackTitle,
  TrackWrapper,
  Wrapper,
} from './ActiveTrack.styled'
import DefaultTrackPicture from '@/components/UI/DefaultTrackPicture/DefaultTrackPicture'

function ActiveTrack() {
  const data = useActiveTrack()
  if (!data) return
  const { coverImage, title, album, genres, artist } = data

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Active Track ~</Title>
        <TrackWrapper>
          <TrackImgWrapper>
            {coverImage ? (
              <TrackImg src={coverImage} />
            ) : (
              <DefaultTrackPicture />
            )}
          </TrackImgWrapper>

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
        <IconSVG id="star-circle" />
      </SvgWrapper>
    </Wrapper>
  )
}

export default ActiveTrack
