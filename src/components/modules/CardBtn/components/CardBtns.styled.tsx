import styled from 'styled-components'

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
`

export const ActionItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const ActionItemHidden = styled(ActionItem)`
  background-color: transparent;
`
