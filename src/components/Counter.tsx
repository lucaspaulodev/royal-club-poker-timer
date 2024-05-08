import { useContext } from "react";
import { TimerContext } from "../contexts/TimerContext";
import { formatTime } from "../lib/formatTime";

const Counter = () => {
    const { minutes, seconds } = useContext(TimerContext)
    return (
        <main className="mx-auto flex max-w-6xl justify-center w-full">
            <div className="text-[8rem] md:text-[16rem] font-bold">
                {`${formatTime(minutes)}:${formatTime(seconds)}`}
            </div>
        </main>
    );
};

export default Counter;
