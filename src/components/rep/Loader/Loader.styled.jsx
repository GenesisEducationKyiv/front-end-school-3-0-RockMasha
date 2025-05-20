import styled from "styled-components";
import colors from "../../../constans/colors";
import { HashLoader } from "react-spinners";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${colors.opacity};
  z-index: 100;
`;

