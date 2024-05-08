import { Dispatch, ReactNode } from "react";
import { TournamentProps } from "./structure";

export type TimerProps = {
    isPlaying: boolean;
    togglePlaying: () => void;
    minutes: number;
    seconds: number;
    progressWidth: string;
    level: number;
    setCurrentTournament: Dispatch<React.SetStateAction<TournamentProps>>,
    broadcastedTournament: TournamentProps;
    setBroadcastedTournament: (newState: any) => void;
}

export type TimerProviderProps = {
    children: ReactNode
}