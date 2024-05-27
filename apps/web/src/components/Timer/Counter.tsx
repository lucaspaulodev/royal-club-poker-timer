import { formatTimer } from "@poker-time/utils/time";
import { useAtomValue } from "jotai";
import { timeAtom } from "../../lib/atoms";

const Counter = () => {
  const time = useAtomValue(timeAtom);

  return (
    <main className="mx-auto flex max-w-6xl justify-center w-full">
      <div className="text-[8rem] md:text-[16rem] font-bold">
        {formatTimer(time)}
      </div>
    </main>
  );
};

export default Counter;
