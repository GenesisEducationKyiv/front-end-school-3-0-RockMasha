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
    color: var(--color-secondary);
    border-radius: 0.25rem;
    background-color: var(--color-on-secondary);
    transition: background-color 0.2s;
    cursor: pointer;
    &:hover {
      background-color: var(--color-secondary-container);
      color: var(--color-on-secondary-container);
    }
  }

  .active {
    background: var(--color-primary);
    color: var(--color-on-primary);
    border-color: var(--color-outline);
  }
  .disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
