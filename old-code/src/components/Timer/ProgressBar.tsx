import { useAtomValue } from "jotai";
import { maxTimeReadOnlyAtom, timeAtom } from "../../lib/atoms";

const ProgressBar = () => {
  const maxTime = useAtomValue(maxTimeReadOnlyAtom);
  const time = useAtomValue(timeAtom);

  const progress = (() => {
    const maxTimeInSec = (maxTime || 0) * 60;
    const elapsedSeconds = maxTimeInSec - (time.minutes * 60 + time.seconds);
    return (elapsedSeconds / maxTimeInSec) * 100;
  })();

  return (
    <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 overflow-hidden">
      <div
        className="bg-amber-500 text-xs font-medium text-white text-center p-3 leading-none rounded-full transition-width duration-1000"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
