import styled from "styled-components";
import colors from "../../constans/colors";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: calc(12px + (35 - 12) * (100vw - 320px) / (1440 - 320));
  ul {
    display: flex;
    gap: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  }
  li {
    padding: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320))
      calc(10px + (20 - 10) * (100vw - 320px) / (1440 - 320));
    font-size: calc(14px + (24 - 14) * (100vw - 320px) / (1440 - 320));
    color: ${colors.white};
    border-radius: 0.25rem;
    background-color: ${colors.purple300};
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background-color: ${colors.purple200};
    }
  }

  .active {
    background: ${colors.purple600};
    border-color: ${colors.purple600};
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
