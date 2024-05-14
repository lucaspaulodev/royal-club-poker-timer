import { FC, createContext } from "react";
import useTimer from "../hooks/useTimer";
import { TimerProps, TimerProviderProps } from "../types/timer";
import { tournaments } from "../db/tournamentsData";
import useBroadcastState from "../hooks/useBroadcastState";

export const TimerContext = createContext({} as TimerProps);

export const TimerProvider: FC<TimerProviderProps> = ({ children }) => {
    const [broadcastedTournament, setBroadcastedTournament] = useBroadcastState(tournaments[0], 'shared-tournament');
    const { broadcastedTime, broadcastedProgressWidth, broadcastedIsPlaying, togglePlaying, broadcastedLevel, setBroadcastedLevel } = useTimer(broadcastedTournament);

    const contextValue: TimerProps = {
        broadcastedTime,
        broadcastedIsPlaying,
        togglePlaying,
        broadcastedTournament,
        setBroadcastedTournament,
        broadcastedProgressWidth,
        broadcastedLevel,
        setBroadcastedLevel
    };

    return (
        <TimerContext.Provider value={contextValue}>
            {children}
        </TimerContext.Provider>
    );
};
