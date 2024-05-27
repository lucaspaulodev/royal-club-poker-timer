import { useAtomValue } from "jotai";
import { tournamentAtom } from "../../lib/atoms";
import { Blinds } from "../../types/blinds";

interface Props {
  blind: Blinds;
  index: number;
}

const DisplayId = ({ blind, index }: Props) => {
  const tournament = useAtomValue(tournamentAtom);

  const levelsUntilIndex = tournament.blinds.slice(0, index);
  const breaksUntilIndex = levelsUntilIndex.filter((blind) => blind.break);
  const qtyOfBreaksUntilIndex = breaksUntilIndex.length;
  const correctedIndex = index - qtyOfBreaksUntilIndex + 1;

  return (
    <div className="flex justify-center text-xs sm:text-base">
      {blind.break ? "BREAK" : correctedIndex}
    </div>
  );
};

export default DisplayId;
