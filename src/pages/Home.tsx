import { useContext, ChangeEvent, memo, useCallback } from "react";
import Header from "../components/Headers/Header";
import { TimerContext } from "../contexts/TimerContext";
import { TournamentProps } from "../types/structure";
import { BlindsProps } from "../types/blinds";
import { ensureNonNegativeValue } from "../lib/ensureNonNegativeValue";
import { X } from "lucide-react";

const LevelInput = memo(({ value, onChange }: { value: number | undefined, onChange: (value: number) => void }) => {
    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChange(ensureNonNegativeValue(e.target.value));
    }, [onChange]);

    return (
        <div className="flex justify-center">
            <input
                className="bg-transparent text-center w-full"
                type="number"
                value={value || ''}
                onChange={handleChange}
            />
        </div>
    );
}, (prevProps, nextProps) => prevProps.value === nextProps.value);


const LevelRow = memo(({ level, index, tournament, onBlindChange, onRemoveLevel }: { level: BlindsProps, index: number, tournament: BlindsProps[], onBlindChange: (index: number, fieldName: keyof BlindsProps, newValue: number) => void, onRemoveLevel: (index: number) => void }) => {
    const correctedIndex = index - tournament.slice(0, index).filter(blind => blind.break).length + 1;

    const handleChange = useCallback((fieldName: keyof BlindsProps, newValue: number) => {
        onBlindChange(index, fieldName, newValue);
    }, [index, onBlindChange]);

    return (
        <tr>
            <td className="px-4 py-2">
                <div className="flex justify-center">{level.break ? 'BREAK' : correctedIndex}</div>
            </td>
            <td className="px-4 py-2">
                <LevelInput value={level.small} onChange={(value) => handleChange('small', value)} />
            </td>
            <td className="px-4 py-2">
                <LevelInput value={level.big} onChange={(value) => handleChange('big', value)} />
            </td>
            <td className="px-4 py-2">
                <div className="flex justify-center">{level.big}</div>
            </td>
            <td className="px-4 py-2">
                <LevelInput value={level.time} onChange={(value) => handleChange('time', value)} />
            </td>
            <td className="px-4 py-2">
                <div className="flex justify-center">
                    <button onClick={() => onRemoveLevel(index)}>
                        <X />
                    </button>
                </div>
            </td>
        </tr>
    );
});

export default function Home() {
    const { setCurrentTournament, broadcastedTournament, setBroadcastedTournament } = useContext(TimerContext);

    const handleBlindChange = useCallback((index: number, fieldName: keyof BlindsProps, newValue: number) => {
        setCurrentTournament((prevTournament: TournamentProps) => {
            const updatedBlinds = [...prevTournament.blinds];
            updatedBlinds[index] = { ...updatedBlinds[index], [fieldName]: newValue };
            const updatedTournament = { ...prevTournament, blinds: updatedBlinds };

            setBroadcastedTournament(updatedTournament);

            return updatedTournament;
        });
    }, [setCurrentTournament, setBroadcastedTournament]);

    const addLevel = useCallback((breakLevel = false) => {
        setCurrentTournament((prevTournament: TournamentProps) => {
            const lastLevel = prevTournament.blinds[prevTournament.blinds.length - 1];
            const newLevel: BlindsProps = breakLevel ? { small: 0, big: 0, time: 15, break: true } : { ...lastLevel, break: false };
            const updatedBlinds = [...prevTournament.blinds, newLevel];

            setBroadcastedTournament({ ...prevTournament, blinds: updatedBlinds });

            return { ...prevTournament, blinds: updatedBlinds };
        });
    }, [setCurrentTournament, setBroadcastedTournament]);

    const removeLevel = useCallback((indexToRemove: number) => {
        setCurrentTournament((prevTournament: TournamentProps) => {
            const updatedBlinds = [...prevTournament.blinds];
            updatedBlinds.splice(indexToRemove, 1);
            const updatedTournament = { ...prevTournament, blinds: updatedBlinds };
    
            setBroadcastedTournament(updatedTournament);
    
            return updatedTournament;
        });
    }, [setCurrentTournament, setBroadcastedTournament]);

    return (
        <div className="space-y-6 bg-gray-900">
            <Header />
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
            <div className="w-full flex justify-center gap-8">
                <button onClick={() => addLevel(false)}>Add New Level</button>
                <button onClick={() => addLevel(true)}>Add Break</button>
            </div>
        </div>
    );
}