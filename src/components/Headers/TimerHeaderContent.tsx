import { useAtomValue } from "jotai";
import { currentBlindReadOnlyAtom, levelAtom } from "../../lib/atoms";

const LEVEL_PREFIX = "LEVEL";

const TimerHeaderContent = () => {
  const level = useAtomValue(levelAtom);
  const currentBlind = useAtomValue(currentBlindReadOnlyAtom);

  return (
    <nav className="w-full flex gap-11 items-center justify-end col-start-2 col-end-2">
      <h1>Royal Club Timer</h1>
      <section>
        {currentBlind.break ? (
          <p>{`BREAK`}</p>
        ) : (
          <p>{`${LEVEL_PREFIX} ${level + 1}`}</p>
        )}
      </section>
    </nav>
  );
};

export default TimerHeaderContent;
