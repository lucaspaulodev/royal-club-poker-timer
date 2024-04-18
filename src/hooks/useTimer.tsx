import { useEffect, useState } from "react";
import { structures } from "../db/db";

const useTimer = (structure: number, level: number, setLevel: React.Dispatch<React.SetStateAction<number>>) => {
    const [minutes, setMinutes] = useState(structures[structure].blinds[0].time);
    const [seconds, setSeconds] = useState(0);
    const [progressWidth, setProgressWidth] = useState('0%');
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        let intervalId: number | undefined;

        const currentBlind = structures[structure]?.blinds[level];

        if (level >= structures[structure]?.blinds.length || !currentBlind) {
            setIsPlaying(false);
            clearInterval(intervalId);
            return;
        }

        if (minutes === 0 && seconds === 0) {
            if (structures[structure]?.blinds[level + 1]) {
                setLevel(prev => prev + 1);
                setProgressWidth('0%');
                setMinutes(structures[structure].blinds[level + 1].time);
                setSeconds(0);
            } else {
                setIsPlaying(false);
                clearInterval(intervalId);
            }
            return;
        }

        if (isPlaying) {
            intervalId = setInterval(() => {
                const totalTimeInSeconds = currentBlind.time * 60;
                const progress = ((totalTimeInSeconds - ((minutes * 60) + seconds)) / totalTimeInSeconds) * 100;
                setProgressWidth(`${progress}%`);

                setSeconds(prevSeconds => {
                    if (prevSeconds === 0) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 0 && structures[structure]?.blinds[level + 1]) {
                                return 0;
                            }
                            return prevMinutes === 0 ? prevMinutes : prevMinutes - 1;
                        });
                        return 59;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => clearInterval(intervalId);
    }, [seconds, isPlaying, level, structure]);

    const togglePlaying = () => setIsPlaying(prev => !prev);

    return { minutes, seconds, progressWidth, isPlaying, togglePlaying };
};

export default useTimer