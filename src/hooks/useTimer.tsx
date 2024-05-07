import { useEffect, useState } from "react";
import { tournaments } from "../db/tournamentsData";

const useTimer = (
  level: number,
  setLevel: React.Dispatch<React.SetStateAction<number>>
) => {
  const [minutes, setMinutes] = useState(tournaments[0]?.blinds[0]?.time || 0);
  const [seconds, setSeconds] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;

    const currentBlind = tournaments[0]?.blinds[level];

    if (!isPlaying) {
      clearInterval(intervalId);
      return;
    }

    if (!currentBlind || level >= tournaments[0]?.blinds.length) {
      setIsPlaying(false);
      clearInterval(intervalId);
      return;
    }

    if (minutes === 0 && seconds === 0) {
      if (tournaments[0]?.blinds[level + 1]) {
        setLevel((prev) => prev + 1);
        setProgressWidth('0%');
        setMinutes(tournaments[0].blinds[level + 1].time || 0);
        setSeconds(0);
      } else {
        setIsPlaying(false);
        clearInterval(intervalId);
      }
      return;
    }

    intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          setMinutes((prevMinutes) => {
            if (prevMinutes === 0 && tournaments[0]?.blinds[level + 1]) {
              return 0;
            }
            return prevMinutes === 0 ? prevMinutes : prevMinutes - 1;
          });
          return 59;
        }
        return prevSeconds - 1;
      });

      const totalTimeInSeconds = currentBlind.time * 60;
      const progress = ((totalTimeInSeconds - ((minutes * 60) + seconds)) / totalTimeInSeconds) * 100;
      setProgressWidth(`${progress}%`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isPlaying, minutes, seconds, level, 0, setLevel]);

  const togglePlaying = () => setIsPlaying((prev) => !prev);

  return { minutes, seconds, progressWidth, isPlaying, togglePlaying };
};

export default useTimer;
