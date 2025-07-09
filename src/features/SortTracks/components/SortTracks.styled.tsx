import styled from "styled-components";
import { Field, Form } from "formik";

export const SidePanel = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  z-index: 50;
  @media (min-width: 768px) {
    width: 28%;
  }
  @media (min-width: 1440px) {
    width: 25%;
  }
`;

export const ContentBox = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  max-width: 420px;
  padding-top: calc(60px + (110 - 60) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-black);
  @media (min-width: 768px) {
    max-width: none;
  }
  @supports (-moz-appearance: none) {
    scrollbar-width: thin;
    scrollbar-color: $var(--color-grey-100) var(--color-black);
  }
  &::-webkit-scrollbar {
    width: 9px;
    @media (min-width: 768px) {
      width: 10px;
    }
    @media (min-width: 1440px) {
      width: 12px;
    }
  }
  &::-webkit-scrollbar-track {
    background-color: var(--color-black);
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-grey-100);
    border-radius: 20px;
    border: 2.5px solid var(--color-black);
    border-width: 2.5px, 10px, 2.5px, 2.5px;
    @media (min-width: 1440px) {
      border-width: 2.5px 20px 2.5px 2.5px;
    }
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  padding: 0 25px;
`;

export const SortForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 768px) {
    gap: 7px;
  }
  @media (min-width: 1440px) {
    gap: 13px;
  }
`;

export const SortField = styled(Field)`
  padding: 2px 7px;
  font-size: calc(14px + (19 - 14) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  background-color: var(--color-grey-100);
  border-radius: 5px;
  border: 1px solid transparent;
  &:-webkit-autofill {
    background-color: transparent !important;
    color: inherit !important;
    -webkit-box-shadow: 0 0 0px 1000px transparent inset !important;
    transition: background-color 5000s ease-in-out 0s;
    border-color: var(--color-white) !important;
    -webkit-text-fill-color: var(--color-white) !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const SortSelect = styled(SortField)`
  padding: 1px 3px;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: calc(16px + (22 - 16) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  @media (min-width: 768px) {
    font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1440 - 320));
  }
  @media (min-width: 1440px) {
    font-size: calc(16px + (22 - 16) * (100vw - 320px) / (1440 - 320));
    gap: 7px;
  }
`;

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  @media (min-width: 768px) {
    gap: 3px;
  }
  @media (min-width: 1440px) {
    gap: 7px;
    margin-top: 20px;
  }
`;

export const ResetBtn = styled.button`
  display: flex;
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  width: calc(35px + (45 - 35) * (100vw - 320px) / (1440 - 320));
  height: calc(35px + (45 - 35) * (100vw - 320px) / (1440 - 320));
  margin-top: 5px;
  color: var(--color-white);
  background-color: var(--color-grey-100);
  border: 1px solid transparent;
  border-radius: 5px;
  @media (min-width: 768px) {
    align-self: flex-start;
    margin-top: 8px;
    padding: 7px;
  }
  @media (min-width: 1440px) {
    margin-top: 10px;
  }
`;

export const OpacityBox = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: var(--color-opacity);
`;
