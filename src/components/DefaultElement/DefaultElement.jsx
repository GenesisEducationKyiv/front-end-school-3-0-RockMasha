import DefaultSvg from "../../svg/DefaultSvg";
import { ImgWrapper, Text } from "./DefaultElement.styled";

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
