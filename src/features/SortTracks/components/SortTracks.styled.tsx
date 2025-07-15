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
  overflow-y: auto;
  width: 100%;
  height: 100%;
  max-width: 420px;
  padding-top: calc(60px + (110 - 60) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-surface-container-low);
  @media (min-width: 768px) {
    max-width: none;
  }
  @supports (-moz-appearance: none) {
    scrollbar-width: thin;
    scrollbar-color: $var(--color-secondary) var(--color-on-secondary);
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
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--color-secondary);
    border-radius: 20px;
    border: 2px solid var(--color-secondary);
    @media (min-width: 1440px) {
      border-width: 2px 20px 2px 2px;
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
  gap: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
`;

export const SortField = styled(Field)`
  padding: 2px 7px 2px 0;
  font-size: calc(14px + (19 - 14) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface-variant);
  background-color: transparent;
  border: 1px solid transparent;
  border-bottom: calc(2px + (3 - 2) * (100vw - 320px) / (1440 - 320)) solid
    var(--color-on-secondary);
  background-color: var(--color-surface-container-low);
  transition:
    background-color 5000s ease-in-out 0s,
    border-bottom-color 0.3s;
  &:focus {
    border-bottom-color: var(--color-primary);
  }
  &::placeholder {
    color: var(--color-on-surface-variant);
    opacity: 0.5;
  }
`;

export const SortSelect = styled(SortField)`
  padding: 1px 3px;
  color: var(--color-on-surface-variant);
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  &:focus {
    outline: 1px solid transparent;
    border-bottom-color: var(--color-on-secondary);
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

export const SelectSVGWrapper = styled.div`
  position: absolute;
  right: 2%;
  bottom: 20%;
  width: calc(8px + (14 - 8) * (100vw - 320px) / (1440 - 320));
  height: calc(8px + (14 - 8) * (100vw - 320px) / (1440 - 320));
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: calc(16px + (22 - 16) * (100vw - 320px) / (1440 - 320));
  color: var(--color-on-surface);
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
  gap: calc(7px + (12 - 7) * (100vw - 320px) / (1440 - 320));
  margin-top: 10px;
  @media (min-width: 1440px) {
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
  color: var(--color-on-secondary);
  background-color: var(--color-secondary);
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
