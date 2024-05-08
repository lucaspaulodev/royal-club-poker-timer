import { FC, createContext, useState } from "react";
import useTimer from "../hooks/useTimer";
import { TimerProps, TimerProviderProps } from "../types/timer";
import { tournaments } from "../db/tournamentsData";

interface ContextValue extends TimerProps {
    setCurrentTournament: React.Dispatch<React.SetStateAction<any>>;
}

export const TimerContext = createContext({} as ContextValue);

export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
    const [currentTournament, setCurrentTournament] = useState(tournaments[0]);
    const [level, setLevel] = useState(0);
    const { minutes, seconds, progressWidth, isPlaying, togglePlaying } = useTimer(level, setLevel, currentTournament);

    const contextValue: ContextValue = {
        isPlaying,
        togglePlaying,
        progressWidth,
        minutes,
        seconds,
        level,
        currentTournament,
        setCurrentTournament
    };

    return (
        <TimerContext.Provider value={contextValue}>
            {children}
        </TimerContext.Provider>
    );
};
