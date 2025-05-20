import { HashLoader } from "react-spinners";

import { useEffect } from "react";
import { Wrapper } from "../Loader.styled";
import colors from "../../../../constans/colors";

function MainLoader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

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

function isPhone() {
  return window.innerWidth < 768;
}

export default MainLoader;
