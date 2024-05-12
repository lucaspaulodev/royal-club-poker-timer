import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";
import { formatTime } from "../../lib/formatTime";

const Counter = () => {
    const { broadcastedTime } = useContext(TimerContext)
    
    return (
        <main className="mx-auto flex max-w-6xl justify-center w-full">
            <div className="text-[8rem] md:text-[16rem] font-bold">
                {`${formatTime(broadcastedTime.minutes)}:${formatTime(broadcastedTime.seconds)}`}
            </div>
        </main>
    );
};

export default Counter;
