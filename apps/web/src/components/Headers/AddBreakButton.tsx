import { Ban } from "lucide-react";

import useAddTournamentLevel from "../../hooks/useAddTournamentLevel";

const AddLevelButton = () => {
  const addLevel = useAddTournamentLevel();

  return (
    <button onClick={() => addLevel(true)} title="Add a new break.">
      <Ban />
    </button>
  );
};

export default AddLevelButton;
