import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";

const TimerHeaderContent = () => {
    const { broadcastedLevel, broadcastedTournament } = useContext(TimerContext);
    const LEVEL_PREFIX = "LEVEL";
    console.log(broadcastedLevel)
    const currentBlind = broadcastedTournament.blinds[broadcastedLevel];

    return (
        <nav className="w-full flex gap-11 items-center justify-end">
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
