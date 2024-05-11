import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";

const TimerHeaderContent = () => {
    const { level, broadcastedTournament } = useContext(TimerContext);
    const LEVEL_PREFIX = "LEVEL";

    const currentBlind = broadcastedTournament.blinds[level];

    return (
        <>
            <h1>Royal Club Timer</h1>
            <section>
                {currentBlind.break ? (
                    <p>{`BREAK`}</p> 
                ) : (
                    <p>{`${LEVEL_PREFIX} ${level + 1}`}</p>
                )}
                
            </section>
        </>
    );
};

export default TimerHeaderContent;
