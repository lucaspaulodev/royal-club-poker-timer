import AddBreakButton from "./AddBreakButton";
import AddLevelButton from "./AddLevelButton";
import DisplayTime from "./DisplayTime";
import LevelDisplay from "./LevelDisplay";
import Logo from "./Logo";
import TogglePlay from "./TogglePlay";
import TournamentList from "./TournamentList";

const HomeHeaderContent = () => {
  return (
    <nav className="col-start-2 col-end-2 flex w-full justify-between">
      <Logo />
      <div className="flex items-center gap-4 sm:gap-8">
        <TournamentList />
        <TogglePlay />
        <DisplayTime />
        <LevelDisplay />
        <AddLevelButton />
        <AddBreakButton />
      </div>
    </nav>
  );
};

export default HomeHeaderContent;
