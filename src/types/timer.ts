import { ReactNode } from "react";

export type TimerProps = {
    isPlaying: boolean;
    togglePlaying: () => void;
    minutes: number;
    seconds: number;
    progressWidth: string;
    level: number;
}

export type TimerProviderProps = {
    children: ReactNode
}