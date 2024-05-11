import { FC, createContext, useState } from "react";
import useTimer from "../hooks/useTimer";
import { TimerProps, TimerProviderProps } from "../types/timer";
import { tournaments } from "../db/tournamentsData";
import useBroadcastState from "../hooks/useBroadcastState";

export const TimerContext = createContext({} as TimerProps);

export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
    const [broadcastedTournament, setBroadcastedTournament, setCurrentTournament] = useBroadcastState(tournaments[0], 'shared-tournament');
    const { minutes, seconds, progressWidth, isPlaying, togglePlaying, level } = useTimer(broadcastedTournament);

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
