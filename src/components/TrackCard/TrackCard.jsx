import { useEffect, useRef, useState } from "react";
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
import PlaySvg from "../../svg/PlaySvg";
import PauseSvg from "../../svg/PauseSvg";
import useIsPlay from "../../hooks/useIsPlay";
import usePlayProgress from "../../hooks/usePlayProgress";
import { getFile } from "../../service/api";
import getTrackSrc from "../../constans/getTrackSrc";
import CardBtns from "../CardBtns/CardBtns";

function TrackCard({ data, setCurrentPlay, currentPlay }) {
  const { id, title, artist, album, genres, coverImage, audioFile, slug } =
    data;

  const audioRef = useRef(null);
  const { isPlaying, togglePlayPause } = useIsPlay(audioRef);
  const { progress, handleSeek } = usePlayProgress(audioRef);
  const [file, setFile] = useState("");
  const playPointer = audioFile ? "pointer" : "not-allowed";

  const handleTogglePlayPause = async () => {
    if (currentPlay && currentPlay !== audioRef.current) {
      currentPlay.pause();
      setCurrentPlay(null);
    }
    await togglePlayPause();
  };

  useEffect(() => {
    if (currentPlay && currentPlay !== audioRef.current && isPlaying) {
      audioRef.current.pause();
    }
    if (isPlaying) {
      setCurrentPlay(audioRef.current);
    } else if (currentPlay === audioRef.current) {
      setCurrentPlay(null);
    }
  }, [currentPlay, isPlaying, setCurrentPlay]);

  useEffect(() => {
    setAudio();
    audioRef.current.currentTime = 0;
  }, [audioFile]);

  const setAudio = async () => {
    if (!audioFile) return null;
    try {
      const answer = await getFile(audioFile);
      const fileSrc = getTrackSrc(answer);
      setFile(fileSrc);
    } catch (error) {
      console.log(error);
    }
  };

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
      <TrackImg src={coverImage || "./src/img/default_track.png"} />
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
