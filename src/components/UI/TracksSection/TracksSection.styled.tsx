import styled from "styled-components"

export const Section = styled.section`
  flex-grow: 1;
  padding-top: calc(50px + (100 - 50) * (100vw - 320px) / (1440 - 320));
  padding-bottom: calc(15px + (30 - 15) * (100vw - 320px) / (1440 - 320));
  @media (min-width: 768px) {
    padding-left: 28%;
  }
  @media (min-width: 1440px) {
    padding-left: 25%;
  }
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  padding: 0 20px;
`
