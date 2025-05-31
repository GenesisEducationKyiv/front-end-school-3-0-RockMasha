import { HashLoader } from "react-spinners";
import isPhone from "../../../shared/helpers/isPhone";
import useLockPage from "../../../shared/hooks/useLockPage";
import { Wrapper } from "../Modal/Modal.styled";
import { colors } from "../../../styles/colors";

function MainLoader() {
  useLockPage();

  return (
    <Wrapper>
      <HashLoader
        data-testid="loading-indicator"
        size={isPhone() ? "75px" : "100px"}
        color={colors.white}
        speedMultiplier="2"
      />
    </Wrapper>
  );
}

export default MainLoader;
