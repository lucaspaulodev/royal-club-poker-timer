import { useAtomValue } from "jotai";
import { levelAtom, tournamentAtom } from "../../lib/atoms";

const Infos = () => {
  const level = useAtomValue(levelAtom);
  const tournament = useAtomValue(tournamentAtom);

  const currentBlinds = tournament.blinds[level];
  const nextBlinds = tournament.blinds[level + 1];

  return (
    <section className="mx-auto flex max-w-[90rem] justify-around items-center mt-8">
      <div className="text-[1rem] md:text-2xl font-bold flex flex-col justify-center items-center md:gap-4">
        <div>BLINDS</div>
        <div className="text-[2rem] md:text-7xl">{`${currentBlinds.small}/${currentBlinds.big} (${currentBlinds.big})`}</div>
        {!!nextBlinds && (
          <div className="text-[1rem] md:text-2xl">{`NEXT: ${nextBlinds.small}/${nextBlinds.big} (${nextBlinds.big})`}</div>
        )}
      </div>
    </section>
  );
};

export default Infos;
