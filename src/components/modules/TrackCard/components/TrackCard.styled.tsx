import styled from 'styled-components'

export const Card = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320))
    calc(10px + (40 - 10) * (100vw - 320px) / (1440 - 320))
    calc(15px + (25 - 15) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-purple-200);
  border-radius: 10px;
`

export const Controls = styled.div`
  display: flex;
  align-items: center;
  margin-right: calc(10px + (35 - 10) * (100vw - 320px) / (1440 - 320));
`

export const PlayPauseButton = styled.button`
  width: calc(25px + (45 - 25) * (100vw - 320px) / (1440 - 320));
  height: calc(25px + (45 - 25) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  background: transparent;
  border: 1px solid transparent;
  padding: 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
  }
`

export const TrackImg = styled.img`
  width: calc(60px + (100 - 60) * (100vw - 320px) / (1440 - 320));
  height: calc(60px + (100 - 60) * (100vw - 320px) / (1440 - 320));
  margin-right: calc(10px + (25 - 10) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  border-radius: 5px;
`

export const TrackInfo = styled.div`
  flex-grow: 1;
  color: var(--color-white);
`

export const TrackTitle = styled.div`
  margin-bottom: calc(3px + (5 - 3) * (100vw - 320px) / (1440 - 320));
  font-size: calc(16px + (26 - 16) * (100vw - 320px) / (1440 - 320));
  font-weight: 700;
`

export const TrackDetails = styled.div`
  margin-bottom: calc(2px + (3 - 2) * (100vw - 320px) / (1440 - 320));
  font-size: calc(11px + (18 - 11) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
`

export const TrackTags = styled.div`
  margin-top: calc(1px + (7 - 1) * (100vw - 320px) / (1440 - 320));
  font-size: calc(10px + (16 - 10) * (100vw - 320px) / (1440 - 320));
  color: var(--color-purple-600);
`

export const ProgressContainer = styled.div`
  position: absolute;
  bottom: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
  width: 93%;
  height: calc(3px + (5 - 3) * (100vw - 320px) / (1440 - 320));
  background: var(--color-white-grey);
  border-radius: 5px;
`

export const ProgressBar = styled.div`
  position: absolute;
  height: 100%;
  background: var(--color-purple-600);
  border-radius: 5px;
  transition: width 0.1s linear;
`

export const SeekBar = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
`

export const NotValidText = styled.p`
  font-size: 36px;
  color: var(--color-white);
`
