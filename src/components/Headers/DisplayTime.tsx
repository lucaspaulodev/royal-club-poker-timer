import { useAtomValue } from "jotai";

import { Time, timeAtom } from "../../lib/atoms";
import { formatTimer } from "../../lib/formatTime";

const DisplayTime = () => {
  const time = useAtomValue<Time>(timeAtom);

  return <p className="text-sm sm:text-base">{formatTimer(time)}</p>;
};

export default DisplayTime;
