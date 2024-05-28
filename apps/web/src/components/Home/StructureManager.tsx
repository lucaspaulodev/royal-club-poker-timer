import LevelRow from "./LevelRow";
import { useAtomValue } from "jotai";
import { blindsReadOnlyAtom } from "../../lib/atoms";

const StructureManager = () => {
  const blinds = useAtomValue(blindsReadOnlyAtom);

  return (
    <section className="grid grid-cols-[1fr_12fr_1fr]">
      <table className="table-fixed w-full col-start-2 col-end-2">
        <thead>
          <tr>
            <th className="px-4 py-2 uppercase text-xs sm:text-base">Level</th>
            <th className="px-4 py-2 uppercase text-xs sm:text-base">Small</th>
            <th className="px-4 py-2 uppercase text-xs sm:text-base">Big</th>
            <th className="px-4 py-2 uppercase text-xs sm:text-base">Ante</th>
            <th className="px-4 py-2 uppercase text-xs sm:text-base">Time</th>
            <th className="w-16"></th>
            <th className="w-16"></th>
          </tr>
        </thead>
        <tbody>
          {blinds.map((blind, index) => (
            <LevelRow key={index} blind={blind} index={index} />
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default StructureManager;
