import { ReactNode, createContext, useEffect, useState } from "react";
import { structures } from "../db/db";

type TimerProps = {
    isPlaying: boolean;
    togglePlaying: () => void;
    structure: string;
    // setStructure: () => void;
    minutes: number;
    seconds: number;
    progressWidth: string;
    level: number;
}

type TimerProviderProps = {
    children: ReactNode
}

export const TimerContext = createContext({} as TimerProps)

export const TimerProvider = ({ children }: TimerProviderProps) => {
    const [structure, setStructure] = useState("big50")
    const [level, setLevel] = useState(0)
    const [minutes, setMinutes] = useState(structures[structure].blinds[level].time)
    const [seconds, setSeconds] = useState(0)
    const [progressWidth, setProgressWidth] = useState('0px');
    const [isPlaying, setIsPlaying] = useState(false)

    const totalTimeInSeconds = structures[structure].blinds[level].time * 60;

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;

        if(minutes === 0 && seconds === 0) {
            setProgressWidth(`${0}px`)
            setLevel((prev) => prev + 1)
            setMinutes(structures[structure].blinds[level+1].time)
            setSeconds(0)
            return
        }

        if (isPlaying) {
            intervalId = setInterval(() => {
                const containerWidth = window.innerWidth;
                const progress = (containerWidth * (totalTimeInSeconds - ((minutes*60) + seconds)) / totalTimeInSeconds)
                setProgressWidth(`${progress}px`);
                
                setSeconds(prevSeconds => {
                    if (prevSeconds === 0) {
                        setMinutes(prevMinutes => {
                            if (prevMinutes === 0) {
                                clearInterval(intervalId!);
                                return prevMinutes;
                            }
                            return prevMinutes - 1;
                        });
                        return 59;
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [seconds, isPlaying, level]);


    const togglePlaying = () => setIsPlaying((prev) => !prev)
    return (
        <TimerContext.Provider value={{ isPlaying, togglePlaying, structure, progressWidth, minutes, seconds, level }}>
            {children}
        </TimerContext.Provider>
    )
}