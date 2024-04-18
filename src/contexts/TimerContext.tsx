import { FC, createContext, useState } from "react";
import useTimer from "../hooks/useTimer";
import { TimerProps, TimerProviderProps } from "../types/timer";

export const TimerContext = createContext({} as TimerProps)

export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
    const [structure] = useState(0);
    const [level, setLevel] = useState(0);

    const { minutes, seconds, progressWidth, isPlaying, togglePlaying } = useTimer(structure, level, setLevel);

    return (
        <TimerContext.Provider value={{ isPlaying, togglePlaying, structure, progressWidth, minutes, seconds, level }}>
            {children}
        </TimerContext.Provider>
    );
}
