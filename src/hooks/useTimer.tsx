import { useEffect, useState } from "react";
import { TournamentProps } from "../types/structure";

const useTimer = (
  currentTournament: TournamentProps
) => {
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState({
    minutes: currentTournament?.blinds[level]?.time || 0,
    seconds: 0
  })
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
      setTime(prevTime => {
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

      const totalTimeInSeconds = currentBlind.time * 60;
      const elapsedSeconds = (currentBlind.time * 60) - ((time.minutes * 60) + time.seconds);
      const progress = (elapsedSeconds / totalTimeInSeconds) * 100;
      setProgressWidth(`${progress}%`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, level, setLevel, currentTournament, time]);

  useEffect(() => {
    setTime({
      minutes: currentTournament.blinds[level]?.time || 0,
      seconds: 0
    });
  }, [currentTournament.blinds[level]?.time, level]);

  const togglePlaying = () => setIsPlaying(prev => !prev);

  return { minutes: time.minutes, seconds: time.seconds, progressWidth, isPlaying, togglePlaying, level };
};

export default useTimer;
