import { ReactNode } from "react";
import { TournamentProps } from "./structure";

export type TimerProps = {
    broadcastedIsPlaying: boolean;
    togglePlaying: () => void;
    broadcastedTournament: TournamentProps;
    setBroadcastedTournament: (newState: any) => void;
    broadcastedTime: {
        minutes: number;
        seconds: number;
    },
    progressWidth: string;
    level: number;
}

export type TimerProviderProps = {
    children: ReactNode
}