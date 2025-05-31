import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: calc(27px + (60 - 27) * (100vw - 320px) / (1440 - 320)) 0;
  background-color: var(--color-opacity);
  z-index: 75;
  overflow-y: scroll;
  @supports (-moz-appearance: none) {
    scrollbar-width: none;
  }
  &::-webkit-scrollbar {
    width: 1px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export const ModalStyled = styled.div`
  position: relative;
  width: ${({ width }) => width?.base || "80%"};
  max-width: 480px;
  padding: calc(27px + (60 - 27) * (100vw - 320px) / (1440 - 320));
  padding-top: calc(35px + (70 - 35) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-purple-300);
  border-radius: 15px;
  @media (min-width: 768px) {
    max-width: ${({ width }) => width?.tablet || "600px"};
  }
  @media (min-width: 1440px) {
    max-width: ${({ width }) => width?.desktop || "800px"};
  }
`;
