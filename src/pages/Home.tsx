import { useContext, useCallback } from "react";
import Header from "../components/Headers/Header";
import { TimerContext } from "../contexts/TimerContext";
import { TournamentProps } from "../types/structure";
import { BlindsProps } from "../types/blinds";
import LevelRow from "../components/Home/LevelRow";

const Home = () => {
    const { broadcastedTournament, setBroadcastedTournament } = useContext(TimerContext);

    const handleBlindChange = useCallback((index: number, fieldName: keyof BlindsProps, newValue: number) => {
        setBroadcastedTournament((prevTournament: TournamentProps) => {
            const updatedBlinds = [...prevTournament.blinds];
            updatedBlinds[index] = { ...updatedBlinds[index], [fieldName]: newValue };
            const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
            return updatedTournament;
        });
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
        <div className="space-y-6 bg-gray-900">
            <Header />
            <section>
                <table className="table-fixed w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 uppercase">Level</th>
                            <th className="px-4 py-2 uppercase">Small Blind</th>
                            <th className="px-4 py-2 uppercase">Big Blind</th>
                            <th className="px-4 py-2 uppercase">Ante</th>
                            <th className="px-4 py-2 uppercase">Time</th>
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
                            />
                        ))}
                    </tbody>
                </table>
            </section>

            <div className="w-full flex justify-center gap-8">
            </div>
        </div>
    );
}

export default Home