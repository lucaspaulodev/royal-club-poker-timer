import { useAtomValue } from "jotai";
import { formatTimer } from "@poker-time/utils/time";

import { Time, timeAtom } from "../../lib/atoms";

const DisplayTime = () => {
  const time = useAtomValue<Time>(timeAtom);

  return <p className="text-sm sm:text-base">{formatTimer(time)}</p>;
};

export default DisplayTime;
