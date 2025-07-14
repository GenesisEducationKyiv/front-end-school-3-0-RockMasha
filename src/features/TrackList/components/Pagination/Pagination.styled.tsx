import styled from 'styled-components'

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
    color: var(--color-white);
    border-radius: 0.25rem;
    background-color: var(--color-purple-300);
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background-color: var(--color-purple-200);
    }
  }

  .active {
    background: var(--color-purple-600);
    border-color: var(--color-purple-600);
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
