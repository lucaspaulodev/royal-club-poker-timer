import { useSetAtom } from "jotai";
import { SkipForward } from "lucide-react";
import { useCallback } from "react";
import { levelAtom } from "../../lib/atoms";

interface Props {
  index: number;
}

const StartLevel = ({ index }: Props) => {
  const setLevel = useSetAtom(levelAtom);

  const startLevel = useCallback(() => setLevel(index), [index, setLevel]);

  return (
    <button onClick={startLevel} title={`Start level ${index + 1}`}>
      <SkipForward />
    </button>
  );
};

export default StartLevel;
