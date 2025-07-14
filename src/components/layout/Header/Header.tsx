import { openFormTrackModal, useToggleFilterPanel } from '@/redux'
import { useDispatch } from 'react-redux'
import {
  BurgerSvgWrapper,
  Container,
  CreateBtn,
  FlexWrapper,
  HeaderEl,
  Title,
} from './Header.styled'
import IconSVG from '@/components/UI/IconSVG/IconSVG'

function Header() {
  const dispatch = useDispatch()
  const togglePanel = useToggleFilterPanel()

  return (
    <HeaderEl>
      <Container>
        <FlexWrapper>
          <BurgerSvgWrapper onClick={togglePanel}>
            <IconSVG id="burger" />
          </BurgerSvgWrapper>
          <Title data-testid="tracks-header">Player</Title>
        </FlexWrapper>
        <CreateBtn
          data-testid="create-track-button"
          onClick={() => dispatch(openFormTrackModal())}
        >
          Create Track
        </CreateBtn>
      </Container>
    </HeaderEl>
  )
}

export default Header
