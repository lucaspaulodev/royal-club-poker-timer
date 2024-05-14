import { useCallback, useContext } from "react";
import { TournamentProps } from "../../types/structure";
import { BlindsProps } from "../../types/blinds";
import { TimerContext } from "../../contexts/TimerContext";
import LevelRow from "./LevelRow";

const StructureManager = () => {
    const { broadcastedTournament, setBroadcastedTournament, setBroadcastedLevel } = useContext(TimerContext);
    const handleBlindChange = useCallback((index: number, fieldName: keyof BlindsProps, newValue: number) => {
        setBroadcastedTournament((prevTournament: TournamentProps) => {
            const updatedBlinds = [...prevTournament.blinds];
            updatedBlinds[index] = { ...updatedBlinds[index], [fieldName]: newValue };
            const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
            return updatedTournament;
        });
    }, [setBroadcastedTournament]);

    const skipToLevel = useCallback((indexToSkip: number) => {
        setBroadcastedLevel(indexToSkip);
    }, [setBroadcastedTournament]);

    const removeLevel = useCallback((indexToRemove: number) => {
        setBroadcastedTournament((prevTournament: TournamentProps) => {
            const updatedBlinds = [...prevTournament.blinds];
            updatedBlinds.splice(indexToRemove, 1);
            const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
            return updatedTournament;
        });
    }, [setBroadcastedTournament]);

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
                        {broadcastedTournament?.blinds.map((level, index, array) => (
                            <LevelRow
                                key={index}
                                level={level}
                                index={index}
                                tournament={array}
                                onBlindChange={handleBlindChange}
                                onRemoveLevel={removeLevel}
                                onSkipLevel={skipToLevel}
                            />
                        ))}
                    </tbody>
                </table>
            </section>
     );
}
 
export default StructureManager;