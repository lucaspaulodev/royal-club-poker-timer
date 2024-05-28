import { useEffect } from "react";
import { tickTimeAtom } from "../../lib/atoms";
import { useSetAtom } from "jotai";

const TimerHandling = () => {
  const tickTimer = useSetAtom(tickTimeAtom);

  useEffect(() => {
    const intervalId = setInterval(tickTimer, 1000);
    return () => clearInterval(intervalId);
  }, [tickTimer]);

  return <></>;
};

export default TimerHandling;
