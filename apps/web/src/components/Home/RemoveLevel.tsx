import { useSetAtom } from "jotai";
import { tournamentAtom } from "../../lib/atoms";
import { Tournament } from "../../types/structure";
import { useCallback } from "react";
import { X } from "lucide-react";

interface Props {
  index: number;
}

const RemoveLevel = ({ index }: Props) => {
  const setTournament = useSetAtom(tournamentAtom);

  const removeLevel = useCallback(() => {
    setTournament((prevTournament: Tournament) => {
      const updatedBlinds = [...prevTournament.blinds];
      updatedBlinds.splice(index, 1);
      const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
      return updatedTournament;
    });
  }, [index, setTournament]);

  return (
    <button onClick={removeLevel} title={"Remove"}>
      <X />
    </button>
  );
};

export default RemoveLevel;
