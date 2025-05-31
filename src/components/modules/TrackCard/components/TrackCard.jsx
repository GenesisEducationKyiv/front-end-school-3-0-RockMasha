import {
  Card,
  Controls,
  PlayPauseButton,
  TrackInfo,
  TrackTitle,
  TrackDetails,
  TrackTags,
  ProgressContainer,
  ProgressBar,
  SeekBar,
  TrackImg,
} from "./TrackCard.styled";
import PlaySvg from "../../../../assets/svg/PlaySvg";
import PauseSvg from "../../../../assets/svg/PauseSvg";
import CardBtns from "../../CardBtn/components/CardBtns";
import useTrackCard from "../hooks/useTrackCard";
import { useRef } from "react";

function TrackCard({ data, setCurrentPlay, currentPlay }) {
  const { id, title, artist, album, genres, coverImage, audioFile, slug } =
    data;
  const audioRef = useRef(null);
  const { file, isPlaying, handleTogglePlayPause, progress, handleSeek } =
    useTrackCard({ audioRef, audioFile, currentPlay, setCurrentPlay });

  const playPointer = audioFile ? "pointer" : "not-allowed";

  return (
    <Card data-testid={"track-item-" + id}>
      <audio ref={audioRef} src={file || undefined} />
      <Controls data-testid={"audio-player-" + id}>
        {!isPlaying ? (
          <PlayPauseButton
            data-testid={"play-button-" + id}
            onClick={audioFile ? handleTogglePlayPause : () => {}}
            style={{ cursor: playPointer }}
            disabled={!audioFile}
          >
            <PlaySvg />
          </PlayPauseButton>
        ) : (
          <PlayPauseButton
            data-testid={"pause-button-" + id}
            onClick={audioFile ? handleTogglePlayPause : () => {}}
            style={{ cursor: playPointer }}
            disabled={!audioFile}
          >
            <PauseSvg />
          </PlayPauseButton>
        )}
      </Controls>
      <TrackImg src={coverImage || "./src/assets/images/default_track.png"} />
      <TrackInfo>
        <TrackTitle data-testid={"track-item-" + id + "-title"}>
          {title}
        </TrackTitle>
        <TrackDetails data-testid={"track-item-" + id + "-artist"}>
          Artist: {artist}
        </TrackDetails>
        <TrackDetails>{album && `Album: ${album}`}</TrackDetails>
        <TrackTags>{genres.map((text) => "#" + text + " ")}</TrackTags>
      </TrackInfo>
      <ProgressContainer>
        <ProgressBar
          style={{ width: `${progress}%` }}
          data-testid={"audio-progress-" + id}
        />
        <SeekBar
          type="range"
          min="0"
          max={`${
            audioRef.current?.duration ? audioRef.current.duration : "100"
          }`}
          value={`${
            (progress / 100) *
            (audioRef.current?.duration ? audioRef.current.duration : "100")
          }`}
          onChange={handleSeek}
          disabled={!audioFile}
        />
      </ProgressContainer>
      <CardBtns id={id} slug={slug} />
    </Card>
  );
}

export default TrackCard;
