import { Dispatch, ReactNode } from "react";
import { TournamentProps } from "./structure";

export type TimerProps = {
    isPlaying: boolean;
    togglePlaying: () => void;
    minutes: number;
    seconds: number;
    progressWidth: string;
    level: number;
    currentTournament: TournamentProps
    setCurrentTournament: Dispatch<React.SetStateAction<TournamentProps>>
}

export type TimerProviderProps = {
    children: ReactNode
}