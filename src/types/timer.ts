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
    broadcastedProgressWidth: string;
    broadcastedLevel: number,
    setBroadcastedLevel: (newState: any) => void;
}

export type TimerProviderProps = {
    children: ReactNode
}