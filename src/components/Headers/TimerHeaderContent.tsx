import { useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";

const TimerHeaderContent = () => {
    const { level } = useContext(TimerContext);
    const LEVEL_PREFIX = "LEVEL";

    return (
        <>
            <h1>Royal Club Timer</h1>
            <section>
                <p>{`${LEVEL_PREFIX} ${level + 1}`}</p>
            </section>
        </>
    );
};

export default TimerHeaderContent;
