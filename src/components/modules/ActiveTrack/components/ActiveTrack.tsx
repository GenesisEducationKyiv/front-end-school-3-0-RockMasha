import IconSVG from '@/components/UI/IconSVG/IconSVG'
import useActiveTrack from '../hooks/useActiveTrack'
import {
  ContentWrapper,
  SvgWrapper,
  Title,
  TrackDefaultSVGWrapper,
  TrackDetails,
  TrackImg,
  TrackImgWrapper,
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
