import DefaultSvg from "../../../../assets/svg/DefaultSvg";
import { ImgWrapper, Text } from "./NoResultElement.styled";

function DefaultElement() {
  return (
    <>
      <ImgWrapper>
        <DefaultSvg />
      </ImgWrapper>
      <Text>no results</Text>
    </>
  );
}

export default DefaultElement;
