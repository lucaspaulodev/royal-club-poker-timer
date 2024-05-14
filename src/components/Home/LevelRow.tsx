import { useCallback } from "react";
import { BlindsProps } from "../../types/blinds";
import { SkipForward, X } from "lucide-react";
import LevelInput from "./LevelInput";

type LevelRowProps = {
    level: BlindsProps,
    index: number,
    tournament: BlindsProps[],
    onBlindChange: (index: number, fieldName: keyof BlindsProps, newValue: number) => void,
    onRemoveLevel: (index: number) => void
    onSkipLevel: (index: number) => void
}

const LevelRow = ({
    level,
    index,
    tournament,
    onBlindChange,
    onRemoveLevel,
    onSkipLevel
}: LevelRowProps) => {
    const correctedIndex = index - tournament.slice(0, index).filter(blind => blind.break).length + 1;

    const handleChange = useCallback((fieldName: keyof BlindsProps, newValue: number) => {
        onBlindChange(index, fieldName, newValue);
    }, [index, onBlindChange]);

    return (
        <tr>
            <td className="px-4 py-2 ">
                <div className="flex justify-center text-xs sm:text-base">{level.break ? 'BREAK' : correctedIndex}</div>
            </td>
            <td className="px-4 py-2">
                <LevelInput value={level.small} onChange={(value) => handleChange('small', value)} />
            </td>
            <td className="px-4 py-2">
                <LevelInput value={level.big} onChange={(value) => handleChange('big', value)} />
            </td>
            <td className="px-4 py-2">
                <div className="flex justify-center text-xs sm:text-base">{level.big}</div>
            </td>
            <td className="px-4 py-2">
                <LevelInput value={level.time} onChange={(value) => handleChange('time', value)} />
            </td>
            <td className="px-4 py-2">
                <div className="flex justify-center">
                    <button onClick={() => onSkipLevel(index)} title={`Skip to level ${index+1}`}>
                        <SkipForward />
                    </button>
                </div>
            </td>
            <td className="px-4 py-2">
                <div className="flex justify-center">
                    <button onClick={() => onRemoveLevel(index)} title={level.break ? "Remove break level." : `Remove level ${correctedIndex}.`}>
                        <X />
                    </button>
                </div>
            </td>
        </tr>
    );
}

export default LevelRow