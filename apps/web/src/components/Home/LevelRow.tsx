import { useCallback } from "react";
import { Blinds } from "../../types/blinds";
import LevelInput from "./LevelInput";
import RemoveLevel from "./RemoveLevel";
import StartLevel from "./StartLevel";
import DisplayId from "./DisplayId";
import { useSetAtom } from "jotai";
import { timeAtom, tournamentAtom } from "../../lib/atoms";
import { Tournament } from "../../types/structure";

type LevelRowProps = {
  blind: Blinds;
  index: number;
};

const LevelRow = ({ blind, index }: LevelRowProps) => {
  const setTournament = useSetAtom(tournamentAtom);
  const setTime = useSetAtom(timeAtom);

  const handleChange = useCallback(
    (fieldName: keyof Blinds) => (newValue: number) => {
      setTournament((prevTournament: Tournament) => {
        const updatedBlinds = [...prevTournament.blinds];
        updatedBlinds[index] = {
          ...updatedBlinds[index],
          [fieldName]: newValue,
        };
        const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
        return updatedTournament;
      });
    },
    [index, setTournament]
  );

  return (
    <tr>
      <td className="px-4 py-2 ">
        <DisplayId blind={blind} index={index} />
      </td>
      <td className="px-4 py-2">
        <LevelInput value={blind.small} onChange={handleChange("small")} />
      </td>
      <td className="px-4 py-2">
        <LevelInput value={blind.big} onChange={handleChange("big")} />
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center text-xs sm:text-base">
          {blind.big}
        </div>
      </td>
      <td className="px-4 py-2">
        <LevelInput
          value={blind.time}
          onChange={(newTime) => {
            handleChange("time")(newTime);
            setTime({ minutes: newTime || 0, seconds: 0 });
          }}
        />
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center">
          <StartLevel index={index} />
        </div>
      </td>
      <td className="px-4 py-2">
        <div className="flex justify-center">
          <RemoveLevel index={index} />
        </div>
      </td>
    </tr>
  );
};

export default LevelRow;
