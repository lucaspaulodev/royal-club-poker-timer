import { ChangeEvent, useCallback } from "react";
import { ensureNonNegativeValue } from "../../lib/ensureNonNegativeValue";

type LevelInputProps = {
  value: number | undefined;
  onChange: (value: number) => void;
};

const LevelInput = ({ value, onChange }: LevelInputProps) => {
  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange(ensureNonNegativeValue(e.target.value));
    },
    [onChange]
  );

  return (
    <div className="flex justify-center">
      <input
        className="bg-transparent text-center w-full text-xs sm:text-base"
        type="number"
        value={value || ""}
        onChange={handleChange}
      />
    </div>
  );
};

export default LevelInput;
