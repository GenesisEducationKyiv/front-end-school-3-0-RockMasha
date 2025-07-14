import IconSVG from '@/components/UI/IconSVG/IconSVG'
import { ImgWrapper, Text, Wrapper } from './NoResultElement.styled'

function DefaultElement() {
  return (
    <Wrapper>
      <ImgWrapper>
        <IconSVG id="nofound" />
      </ImgWrapper>
      <Text>no results</Text>
    </Wrapper>
  )
}

export default DefaultElement
