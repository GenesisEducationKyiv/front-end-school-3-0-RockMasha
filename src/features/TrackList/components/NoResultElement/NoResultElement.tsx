import IconSVG from '@/components/UI/IconSVG/IconSVG'
import { ImgWrapper, Text } from './NoResultElement.styled'

function DefaultElement() {
  return (
    <>
      <ImgWrapper>
        <IconSVG id="nofound" />
      </ImgWrapper>
      <Text>no results</Text>
    </>
  )
}

export default DefaultElement
