import { useContext, ChangeEvent } from "react";
import Header from "../components/Headers/Header";
import { TimerContext } from "../contexts/TimerContext";
import { TournamentProps } from "../types/structure";
import { BlindsProps } from "../types/blinds";
import { ensureNonNegativeValue } from "../lib/ensureNonNegativeValue";

export default function Home() {
    const { currentTournament, setCurrentTournament } = useContext(TimerContext);

    const handleBlindChange = (index: number, fieldName: keyof BlindsProps, newValue: number) => {
        setCurrentTournament((prevTournament: TournamentProps) => {
            const updatedBlinds = [...prevTournament.blinds];
            updatedBlinds[index] = { ...updatedBlinds[index], [fieldName]: newValue };
            return { ...prevTournament, blinds: updatedBlinds };
        });
    };

    const addNewLevel = () => {
        setCurrentTournament((prevTournament: TournamentProps) => {
            const lastLevel = prevTournament.blinds[prevTournament.blinds.length - 1];
            const newLevel: BlindsProps = { ...lastLevel }; // Copy values from the last level
            const updatedBlinds = [...prevTournament.blinds, newLevel];
            return { ...prevTournament, blinds: updatedBlinds };
        });
    };

    const addBreakLevel = () => {
        setCurrentTournament((prevTournament: TournamentProps) => {
            const breakLevel: BlindsProps = { small: 0, big: 0, time: 15 };
            const updatedBlinds = [...prevTournament.blinds, breakLevel];
            return { ...prevTournament, blinds: updatedBlinds };
        });
    };

    return (
        <div className="space-y-6 bg-gray-900">
            <Header />
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 uppercase">Level</th>
                        <th className="px-4 py-2 uppercase">small blind</th>
                        <th className="px-4 py-2 uppercase">big blind</th>
                        <th className="px-4 py-2 uppercase">ante</th>
                        <th className="px-4 py-2 uppercase">time</th>
                    </tr>
                </thead>
                <tbody>
                    {currentTournament?.blinds.map((level, index) => {
                        return (
                            <tr key={index}>
                                <td className=" px-4 py-2">
                                    <div className="flex justify-center">
                                        {level.small === 0 && level.big === 0 ? 'BREAK': index + 1}
                                    </div>
                                </td>
                                <td className=" px-4 py-2">
                                    <div className="flex justify-center">
                                        <input className="bg-transparent text-center w-full" type="number" value={level.small > 0 ? level.small : ''} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            handleBlindChange(index, 'small', ensureNonNegativeValue(e.target.value));
                                        }} />
                                    </div>
                                </td>
                                <td className=" px-4 py-2">
                                    <div className="flex justify-center">
                                        <input className="bg-transparent text-center w-full w-full" type="number" value={level.big > 0 ? level.big : ''} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            handleBlindChange(index, 'big', ensureNonNegativeValue(e.target.value));
                                        }} />
                                    </div>
                                </td>
                                <td className=" px-4 py-2">
                                    <div className="flex justify-center">
                                        {level.big}
                                    </div>
                                </td>
                                <td className=" px-4 py-2">
                                    <div className="flex justify-center">
                                        <input className="bg-transparent text-center w-full" type="number" value={level.time > 0 ? level.time : ''} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                            handleBlindChange(index, 'time', ensureNonNegativeValue(e.target.value));
                                        }} />
                                    </div>
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
            <div className="w-full flex justify-center gap-8">
                <button onClick={addNewLevel}>Add New Level</button>
                <button onClick={addBreakLevel}>Add Break</button>
            </div>
        </div>
    )
}
