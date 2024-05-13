import { useState, useEffect } from 'react';
import { TournamentProps } from '../types/structure';
import { BlindsProps } from '../types/blinds';

type StateType = TournamentProps | BlindsProps[] | any;

const useBroadcastState = <T extends StateType>(
    initialState: T,
    channelName: string,
): [T, (newState: T | ((prev: T) => T), broadcast?: boolean ) => void] => {
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

    const updateState = (newState: T | ((prev: T) => T), broadcast = true) => {
        if (typeof newState === 'function') {
            setState((prevState: T) => {
                const nextState = (newState as (prev: T) => T)(prevState);
                if (broadcast) {
                    const broadcastChannel = new BroadcastChannel(channelName);
                    broadcastChannel.postMessage(nextState);
                    broadcastChannel.close();
                }
                return nextState;
            });
        } else {
            setState(newState);
            if (broadcast) {
                const broadcastChannel = new BroadcastChannel(channelName);
                broadcastChannel.postMessage(newState);
                broadcastChannel.close();
            }
        }
    };

    return [state, updateState];
};

export default useBroadcastState;
