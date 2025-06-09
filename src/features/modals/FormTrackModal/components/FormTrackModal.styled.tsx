import styled from "styled-components";
import { ErrorMessage, Field, Form } from "formik";

export const TrackForm = styled(Form)``;

export const Title = styled.h2`
  margin-bottom: calc(10px + (25 - 10) * (100vw - 320px) / (1440 - 320));
  font-size: calc(20px + (32 - 20) * (100vw - 320px) / (1440 - 320));
  font-weight: 700;
  color: var(--color-white);
`;

export const TrackList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: calc(7px + (20 - 7) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(7px + (20 - 7) * (100vw - 320px) / (1440 - 320));
  @media (min-width: 768px) {
    max-height: 150px;
  }
`;

export const TrackItem = styled.li`
  position: relative;
  max-width: calc(200px + (350 - 200) * (100vw - 320px) / (1440 - 320));
`;

export const TrackField = styled(Field)`
  padding: 1px 7px;
  font-size: calc(12px + (20 - 12) * (100vw - 320px) / (1440 - 320));
  color: var(--color-black);
  background-color: var(--color-white);
  border-radius: 5px;
  border: 1px solid transparent;
  &:focus {
    outline: calc(1px + (3 - 1) * (100vw - 320px) / (1440 - 320)) solid
      var(--color-purple-200);
  }
`;

export const TrackSelectBox = styled.div`
  display: flex;
  gap: calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  margin-bottom: calc(3px + (10 - 3) * (100vw - 320px) / (1440 - 320));
`;

export const TrackSelect = styled(TrackField)`
  padding: 1px;
`;

export const GenresTegList = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: calc(3px + (7 - 3) * (100vw - 320px) / (1440 - 320));
  margin-bottom: 3px;
`;

export const GenresTegItem = styled.li`
  display: flex;
  align-items: center;
  gap: calc(3px + (5 - 3) * (100vw - 320px) / (1440 - 320));
`;

export const GenresTegText = styled.p`
  font-size: calc(13px + (18 - 13) * (100vw - 320px) / (1440 - 320));
  color: var(--color-purple-600);
`;

export const WrapperDeleteSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(14px + (22 - 14) * (100vw - 320px) / (1440 - 320));
  height: calc(14px + (22 - 14) * (100vw - 320px) / (1440 - 320));
  padding: calc(1px + (3 - 1) * (100vw - 320px) / (1440 - 320));
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
  transition: background-color 0.3s;
  &:hover {
    background-color: var(--color-white-grey);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: calc(4px + (10 - 4) * (100vw - 320px) / (1440 - 320));
  font-size: calc(15px + (22 - 15) * (100vw - 320px) / (1440 - 320));
  color: var(--color-white);
  @media (min-width: 1440px) {
    gap: 7px;
  }
`;

export const SelectLabel = styled(Label)`
  display: flex;
  gap: 0;
  color: var(--color-white);
`;

export const WrapperSVG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(20px + (33 - 20) * (100vw - 320px) / (1440 - 320));
  height: calc(20px + (33 - 20) * (100vw - 320px) / (1440 - 320));
  padding: calc(3px + (7 - 3) * (100vw - 320px) / (1440 - 320));
  background-color: var(--color-purple-500);
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
`;

export const CrossWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
  top: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  right: calc(10px + (15 - 10) * (100vw - 320px) / (1440 - 320));
  width: calc(30px + (50 - 30) * (100vw - 320px) / (1440 - 320));
  height: calc(30px + (50 - 30) * (100vw - 320px) / (1440 - 320));
`;

export const SubmitBtn = styled.button`
  display: block;
  padding: calc(3px + (10 - 3) * (100vw - 320px) / (1440 - 320))
    calc(7px + (15 - 7) * (100vw - 320px) / (1440 - 320));
  margin-left: auto;
  color: var(--color-white);
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1440 - 320));
  font-weight: 600;
  background-color: var(--color-purple-600);
  border: 1px solid transparent;
  border-radius: calc(5px + (10 - 5) * (100vw - 320px) / (1440 - 320));
`;

export const ErrorEl = styled(ErrorMessage)`
  position: absolute;
  right: 0;
  bottom: calc(-10px + (10 - 16) * (100vw - 320px) / (1440 - 320));
  font-size: calc(10px + (16 - 10) * (100vw - 320px) / (1440 - 320));
  font-weight: 500;
  white-space: nowrap;
  color: var(--color-red-200);
  @media (min-width: 768px) {
    left: 0;
  }
`;
