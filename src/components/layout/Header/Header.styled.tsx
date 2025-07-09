import styled from "styled-components";
import { getHiddenStyle } from "../../../styles/helpers/getHiddenStyle";

export const HeaderEl = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: calc(10px + (16 - 10) * (100vw - 320px) / (1440 - 320)) 0;
  background-color: var(--color-black);
  border-bottom: 2px solid var(--color-grey-100);
  z-index: 60;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 0 auto;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(24px + (48 - 24) * (100vw - 320px) / (1440 - 320));
  font-weight: 600;
  color: var(--color-white);
`;

export const CreateBtn = styled.button`
  padding: calc(3px + (10 - 3) * (100vw - 320px) / (1440 - 320))
    calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  font-size: calc(18px + (32 - 18) * (100vw - 320px) / (1440 - 320));
  font-weight: 500;
  color: var(--color-white);
  background-color: var(--color-purple-300);
  border: 1px solid transparent;
  border-radius: 5px;
`;

export const BurgerSvgWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  width: 42px;
  height: 30px;
  color: var(--color-white);
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: background-color 0.3s;
  @media (min-width: 768px) {
    ${getHiddenStyle()}
  }
  &:hover {
    background-color: var(--color-grey-100);
  }
`;
