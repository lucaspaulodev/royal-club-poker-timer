import { useAtomValue } from "jotai";
import { currentBlindReadOnlyAtom, levelAtom } from "../../lib/atoms";
import Logo from "./Logo";

const LEVEL_PREFIX = "LEVEL";

const TimerHeaderContent = () => {
  const level = useAtomValue(levelAtom);
  const currentBlind = useAtomValue(currentBlindReadOnlyAtom);

  return (
    <nav className="flex items-center justify-between">
      <Logo />
      <h1 className="font-monument text-3xl leading-10 text-white">
        Tournament name
      </h1>
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
