import { CirclePlus } from "lucide-react";

import useAddTournamentLevel from "../../hooks/useAddTournamentLevel";

const AddLevelButton = () => {
  const addLevel = useAddTournamentLevel();

  return (
    <button onClick={() => addLevel(false)} title="Add a new level.">
      <CirclePlus />
    </button>
  );
};

export default AddLevelButton;
