import { useAtom } from "jotai";
import { useCallback } from "react";
import { isPlayingAtom } from "../../lib/atoms";
import { Pause, Play } from "lucide-react";

const TogglePlay = () => {
  const [isPlaying, setIsPlaying] = useAtom(isPlayingAtom);

  const togglePlaying = useCallback(() => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  }, [setIsPlaying]);

  return (
    <button
      onClick={togglePlaying}
      title={isPlaying ? "Pause tournament." : "Play tournament."}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
};

export default TogglePlay;
