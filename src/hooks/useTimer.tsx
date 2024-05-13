import { useEffect, useState } from "react";
import { TournamentProps } from "../types/structure";
import useBroadcastState from "./useBroadcastState";

const useTimer = (
  currentTournament: TournamentProps | undefined
) => {
  const [level, setLevel] = useState<number>(0);
  const [progressWidth, setProgressWidth] = useState<string>('0%');
  const [broadcastedIsPlaying, setBroadcastedIsPlaying] = useBroadcastState<boolean>(false, 'playing');
  const [broadcastedTime, setBroadcastedTime] = useBroadcastState<{ minutes: number; seconds: number }>({
    minutes: currentTournament?.blinds[level]?.time || 0,
    seconds: 0
  }, 'time');

  useEffect(() => {
    let intervalId
    const currentBlind = currentTournament?.blinds[level];

    if (!broadcastedIsPlaying || !currentBlind || level >= (currentTournament?.blinds.length || 0)) {
      clearInterval(intervalId);
      return;
    }

    intervalId = setInterval(() => {
      setBroadcastedTime(prevTime => {
        const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
        const newMinutes = prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;
        if (newMinutes === 0 && newSeconds === 0 && currentTournament?.blinds[level + 1]) {
          setLevel(prevLevel => prevLevel + 1);
          return {
            minutes: currentTournament.blinds[level + 1]?.time || 0,
            seconds: 0
          };
        }
        return {
          minutes: newMinutes,
          seconds: newSeconds
        };
      });

      const totalTimeInSeconds = (currentBlind?.time || 0) * 60;
      const elapsedSeconds = ((currentBlind?.time || 0) * 60) - ((broadcastedTime.minutes * 60) + broadcastedTime.seconds);
      const progress = (elapsedSeconds / totalTimeInSeconds) * 100;
      setProgressWidth(`${progress}%`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [broadcastedIsPlaying, level, currentTournament, broadcastedTime.minutes, broadcastedTime.seconds]);

  useEffect(() => {
    setBroadcastedTime({
      minutes: currentTournament?.blinds[level]?.time || 0,
      seconds: 0
    });
  }, [currentTournament?.blinds[level]?.time, level]);

  const togglePlaying = () => setBroadcastedIsPlaying(prev => !prev, true);

  return { broadcastedTime, broadcastedIsPlaying, togglePlaying, progressWidth, level };
};

export default useTimer;
