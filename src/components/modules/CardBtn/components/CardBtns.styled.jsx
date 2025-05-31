import styled from "styled-components";

export const ActionButtonsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  align-self: flex-end;
  justify-self: flex-end;
  max-width: calc(
    2 * (26.5px + (53.5 - 26.5) * (100vw - 320px) / (1440 - 320))
  );
`;

export const ActionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(4px + (8 - 4) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-white-grey);
  border-radius: 5px;
`;

export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(15px + (30 - 15) * (100vw - 320px) / (1440 - 320));
  height: calc(15px + (30 - 15) * (100vw - 320px) / (1440 - 320));
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0;
  &:focus {
    outline: none;
  }
`;

export const ActionItemHidden = styled(ActionItem)`
  background-color: transparent;
`;
export const ActionButtonHidden = styled(ActionButton)`
  background-color: transparent;
`;

export const ActionButtonUpload = styled(ActionButton)`
  transform: rotate(-90deg);
`;
