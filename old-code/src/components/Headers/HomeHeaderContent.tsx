import AddBreakButton from "./AddBreakButton";
import AddLevelButton from "./AddLevelButton";
import DisplayTime from "./DisplayTime";
import LevelDisplay from "./LevelDisplay";
import Logo from "./Logo";
import TogglePlay from "./TogglePlay";
import TournamentList from "./TournamentList";

const HomeHeaderContent = () => {
  return (
    <nav className="w-full flex justify-between col-start-2 col-end-2">
      <Logo />
      <div className="flex gap-4 items-center sm:gap-8">
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
