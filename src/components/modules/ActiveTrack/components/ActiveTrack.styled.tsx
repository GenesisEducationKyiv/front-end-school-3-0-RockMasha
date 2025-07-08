import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  padding: calc(7px + (11 - 7) * (100vw - 320px) / (1440 - 320))
    calc(10px + (40 - 10) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-purple-300);
  border-radius: 10px;
`

export const ContentWrapper = styled.div`
  width: 100%;
`

export const TrackWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`

export const Title = styled.p`
  margin-bottom: calc(3px + (8 - 3) * (100vw - 320px) / (1440 - 320));
  font-size: calc(16px + (28 - 16) * (100vw - 320px) / (1440 - 320));
  font-weight: 700;
  color: var(--color-white);
  font-style: italic;
  padding-bottom: calc(1px + (3 - 1) * (100vw - 320px) / (1440 - 320));
  border-bottom: calc(1.5px + (3 - 1.5) * (100vw - 320px) / (1440 - 320)) solid
    var(--color-white);
  width: 75%;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    width: 35%;
  }
`

export const TrackImgWrapper = styled.div`
  width: calc(60px + (100 - 60) * (100vw - 320px) / (1440 - 320));
  height: calc(60px + (100 - 60) * (100vw - 320px) / (1440 - 320));
  margin-right: calc(10px + (25 - 10) * (100vw - 320px) / (1440 - 320));
  border-radius: 5px;
`

export const TrackImg = styled.img`
  width: 100%;
  height: 100%;
`

export const TrackInfo = styled.div`
  flex-grow: 1;
  color: var(--color-white);
`

export const TrackTitle = styled.div`
  margin-bottom: calc(2px + (4 - 2) * (100vw - 320px) / (1440 - 320));
  font-size: calc(14px + (20 - 14) * (100vw - 320px) / (1440 - 320));
  font-weight: 700;
`

export const TrackDetails = styled.div`
  margin-bottom: calc(2px + (3 - 2) * (100vw - 320px) / (1440 - 320));
  font-size: calc(10px + (14 - 10) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
`

export const TrackTags = styled.div`
  margin-top: calc(1px + (7 - 1) * (100vw - 320px) / (1440 - 320));
  font-size: calc(9px + (14 - 9) * (100vw - 320px) / (1440 - 320));
  color: var(--color-purple-600);
`

export const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  width: calc(85px + (150 - 85) * (100vw - 320px) / (1440 - 320));
  color: var(--color-purple-500)
`
