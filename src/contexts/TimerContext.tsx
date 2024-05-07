import { FC, createContext, useState } from "react";
import useTimer from "../hooks/useTimer";
import { TimerProps, TimerProviderProps } from "../types/timer";

export const TimerContext = createContext({} as TimerProps)

export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
    const [level, setLevel] = useState(0);

    const currentTournament = {}

    const { minutes, seconds, progressWidth, isPlaying, togglePlaying } = useTimer(level, setLevel);

    return (
        <TimerContext.Provider value={{ isPlaying, togglePlaying, progressWidth, minutes, seconds, level }}>
            {children}
        </TimerContext.Provider>
    );
}
