import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";

const TimerHeaderContent = () => {
    const { broadcastedLevel, broadcastedTournament } = useContext(TimerContext);
    const LEVEL_PREFIX = "LEVEL";
    const currentBlind = broadcastedTournament.blinds[broadcastedLevel];

    return (
        <nav className="w-full flex gap-11 items-center justify-end col-start-2 col-end-2">
            <h1>Royal Club Timer</h1>
            <section>
                {currentBlind.break ? (
                    <p>{`BREAK`}</p>
                ) : (
                    <p>{`${LEVEL_PREFIX} ${broadcastedLevel + 1}`}</p>
                )}
            </section>
        </nav>
    );
};

export default TimerHeaderContent;
