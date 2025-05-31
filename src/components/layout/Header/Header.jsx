import BurgerSvg from "../../../assets/svg/BurgerSvg";
import { useFiltersHiddenContext } from "../../../context/FiltersProvider";
import { useModalFuncContext } from "../../../context/ModalProvider";
import {
  BurgerSvgWrapper,
  Container,
  CreateBtn,
  FlexWrapper,
  HeaderEl,
  Title,
} from "./Header.styled";

function Header() {
  const { toggleHidden } = useFiltersHiddenContext();
  const { setFormTrack } = useModalFuncContext();

  return (
    <HeaderEl>
      <Container>
        <FlexWrapper>
          <BurgerSvgWrapper onClick={toggleHidden}>
            <BurgerSvg />
          </BurgerSvgWrapper>
          <Title data-testid="tracks-header">Player</Title>
        </FlexWrapper>
        <CreateBtn
          data-testid="create-track-button"
          onClick={() => setFormTrack(true)}
        >
          Create Track
        </CreateBtn>
      </Container>
    </HeaderEl>
  );
}

export default Header;
