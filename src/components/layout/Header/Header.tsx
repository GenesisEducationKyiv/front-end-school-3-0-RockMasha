import { actionOpenFormTrackModal, useFilterPanel } from '@/redux'
import BurgerSvg from '../../../assets/svg/BurgerSvg'
import {
  BurgerSvgWrapper,
  Container,
  CreateBtn,
  FlexWrapper,
  HeaderEl,
  Title,
} from './Header.styled'
import { useDispatch } from 'react-redux'

function Header() {
  const dispatch = useDispatch()
  const togglePanel = useFilterPanel()

  return (
    <HeaderEl>
      <Container>
        <FlexWrapper>
          <BurgerSvgWrapper onClick={togglePanel}>
            <BurgerSvg />
          </BurgerSvgWrapper>
          <Title data-testid="tracks-header">Player</Title>
        </FlexWrapper>
        <CreateBtn
          data-testid="create-track-button"
          onClick={() => dispatch(actionOpenFormTrackModal())}
        >
          Create Track
        </CreateBtn>
      </Container>
    </HeaderEl>
  )
}

export default Header
