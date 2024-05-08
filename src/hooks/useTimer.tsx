import { useEffect, useState } from "react";
import { TournamentProps } from "../types/structure";

const useTimer = (
  level: number,
  setLevel: React.Dispatch<React.SetStateAction<number>>,
  currentTournament: TournamentProps
) => {
  const [minutes, setMinutes] = useState(currentTournament?.blinds[level]?.time || 0);
  const [seconds, setSeconds] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId;

    const currentBlind = currentTournament?.blinds[level];

    if (!isPlaying || !currentBlind || level >= currentTournament.blinds.length) {
      clearInterval(intervalId);
      return;
    }

    intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        const newSeconds = prevSeconds === 0 ? 59 : prevSeconds - 1;
        if (newSeconds === 59 && prevSeconds === 0) {
          setMinutes(prevMinutes => {
            if (prevMinutes === 0 && currentTournament?.blinds[level + 1]) {
              setLevel(prevLevel => prevLevel + 1);
              return currentTournament.blinds[level + 1].time || 0;
            }
            return prevMinutes === 0 ? prevMinutes : prevMinutes - 1;
          });
        }
        return newSeconds;
      });

      const totalTimeInSeconds = currentBlind.time * 60;
      const elapsedSeconds = (currentBlind.time * 60) - ((minutes * 60) + seconds);
      const progress = (elapsedSeconds / totalTimeInSeconds) * 100;
      setProgressWidth(`${progress}%`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, level, setLevel, currentTournament, minutes, seconds]);

  useEffect(() => {
    setMinutes(currentTournament.blinds[level]?.time || 0);
    setSeconds(0);
  }, [currentTournament.blinds[level]?.time, level]);

  const togglePlaying = () => setIsPlaying(prev => !prev);

  return { minutes, seconds, progressWidth, isPlaying, togglePlaying };
};

export default useTimer;
