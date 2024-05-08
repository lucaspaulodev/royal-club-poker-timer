import { useState, useEffect } from 'react';
import { TournamentProps } from '../types/structure';
import { BlindsProps } from '../types/blinds';

type StateType = TournamentProps | BlindsProps[];

const useBroadcastState = <T extends StateType>(
    initialState: T,
    channelName: string
): [T, (newState: T) => void] => {
    const [state, setState] = useState<T>(initialState);
    useEffect(() => {
        const broadcastChannel = new BroadcastChannel(channelName);

        const handleMessage = (event: MessageEvent<T>) => {
            setState(event.data);
        };

        broadcastChannel.addEventListener('message', handleMessage);

        return () => {
            broadcastChannel.removeEventListener('message', handleMessage);
            broadcastChannel.close();
        };
    }, [channelName]);

    const broadcastState = (newState: T) => {
        const broadcastChannel = new BroadcastChannel(channelName);
        broadcastChannel.postMessage(newState);
        broadcastChannel.close();
    };

    return [state, broadcastState];
};

export default useBroadcastState;
