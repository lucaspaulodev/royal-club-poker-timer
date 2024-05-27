import { useAtom } from "jotai";

import { levelAtom } from "../../lib/atoms";

const LevelDisplay = () => {
  const [level] = useAtom<number>(levelAtom);

  return <p className="text-sm sm:text-base">{`Level ${level + 1}`}</p>;
};

export default LevelDisplay;
