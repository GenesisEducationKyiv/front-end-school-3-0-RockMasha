import { useEffect } from "react";
import { Wrapper } from "../Loader.styled";
import colors from "../../../../constans/colors";
import { HashLoader } from "react-spinners";

function ListLoader() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  return (
    <Wrapper>
      <HashLoader
        data-testid="loading-tracks"
        color={colors.white}
        speedMultiplier="2"
        size={isPhone() ? "75px" : "100px"}
      />
    </Wrapper>
  );
}

function isPhone() {
  return window.innerWidth < 768;
}

export default ListLoader;
