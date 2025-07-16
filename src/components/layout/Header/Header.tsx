import {
  openFormTrackModal,
  selectFilterPanel,
  useToggleFilterPanel,
} from '@/redux'
import { useDispatch, useSelector } from 'react-redux'
import { BurgerSvgWrapper, Container, HeaderEl, Title } from './Header.styled'
import IconSVG from '@/components/UI/IconSVG/IconSVG'
import ActionBtn from '@/components/UI/ActionBtn/ActionBtn'

function Header() {
  const dispatch = useDispatch()
  const togglePanel = useToggleFilterPanel()
  const filterPanel = useSelector(selectFilterPanel)

  return (
    <HeaderEl>
      <Container>
        <BurgerSvgWrapper onClick={togglePanel}>
          <IconSVG id={filterPanel ? 'cross' : 'burger'} />
        </BurgerSvgWrapper>
        <Title data-testid="tracks-header">Player</Title>
        <ActionBtn
          icon="plus"
          theme="Primary-sub"
          minSize={30}
          maxSize={55}
          handelClick={() => dispatch(openFormTrackModal())}
          data-testid="create-track-button"
        />
      </Container>
    </HeaderEl>
  )
}

export default Header

// <CreateBtn
//   onClick={() => dispatch(openFormTrackModal())}
// >
//   Create Track
// </CreateBtn>
