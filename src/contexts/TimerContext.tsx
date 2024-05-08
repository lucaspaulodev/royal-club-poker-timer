import { FC, createContext, useState } from "react";
import useTimer from "../hooks/useTimer";
import { TimerProps, TimerProviderProps } from "../types/timer";
import { tournaments } from "../db/tournamentsData";
import useBroadcastState from "../hooks/useBroadcastState";

export const TimerContext = createContext({} as TimerProps);

export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
    const [currentTournament, setCurrentTournament] = useState(tournaments[0]);
    const [broadcastedTournament, setBroadcastedTournament] = useBroadcastState(currentTournament, 'shared-tournament');
    const [level, setLevel] = useState(0);
    const { minutes, seconds, progressWidth, isPlaying, togglePlaying } = useTimer(level, setLevel, broadcastedTournament);

    const contextValue: TimerProps = {
        isPlaying,
        togglePlaying,
        progressWidth,
        minutes,
        seconds,
        level,
        setCurrentTournament,
        broadcastedTournament,
        setBroadcastedTournament
    };

    return (
        <TimerContext.Provider value={contextValue}>
            {children}
        </TimerContext.Provider>
    );
};
