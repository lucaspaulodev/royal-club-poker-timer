import { useEffect } from "react";
import { TournamentProps } from "../types/structure";
import useBroadcastState from "./useBroadcastState";

const useTimer = (
  currentTournament: TournamentProps | undefined
) => {
  const [broadcastedLevel, setBroadcastedLevel] = useBroadcastState<number>(0, 'level');
  const [broadcastedProgressWidth, setBroadcastedProgressWidth] = useBroadcastState<string>('0%', 'progress-bar');
  const [broadcastedIsPlaying, setBroadcastedIsPlaying] = useBroadcastState<boolean>(false, 'playing');
  const [broadcastedTime, setBroadcastedTime] = useBroadcastState<{ minutes: number; seconds: number }>({
    minutes: currentTournament?.blinds[broadcastedLevel]?.time || 0,
    seconds: 0
  }, 'time');

  useEffect(() => {
    let intervalId
    const currentBlind = currentTournament?.blinds[broadcastedLevel];

    if (!broadcastedIsPlaying || !currentBlind || broadcastedLevel >= (currentTournament?.blinds.length || 0)) {
      clearInterval(intervalId);
      return;
    }

    intervalId = setInterval(() => {
      setBroadcastedTime(prevTime => {
        const newSeconds = prevTime.seconds === 0 ? 59 : prevTime.seconds - 1;
        const newMinutes = prevTime.seconds === 0 ? prevTime.minutes - 1 : prevTime.minutes;
        if (newMinutes === 0 && newSeconds === 0 && currentTournament?.blinds[broadcastedLevel + 1]) {
          setBroadcastedLevel(prevLevel => prevLevel + 1);
          return {
            minutes: currentTournament.blinds[broadcastedLevel + 1]?.time || 0,
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
      setBroadcastedProgressWidth(`${progress}%`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [broadcastedIsPlaying, broadcastedLevel, currentTournament, broadcastedTime.minutes, broadcastedTime.seconds]);

  useEffect(() => {
    setBroadcastedTime({
      minutes: currentTournament?.blinds[broadcastedLevel]?.time || 0,
      seconds: 0
    });
  }, [currentTournament?.blinds[broadcastedLevel]?.time, broadcastedLevel]);

  const togglePlaying = () => setBroadcastedIsPlaying(prev => !prev, true);

  return { broadcastedTime, broadcastedIsPlaying, togglePlaying, broadcastedProgressWidth, broadcastedLevel, setBroadcastedLevel };
};

export default useTimer;
