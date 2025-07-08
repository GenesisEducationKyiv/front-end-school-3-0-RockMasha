import styled from 'styled-components'

export const ToastContainer = styled.div`
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
