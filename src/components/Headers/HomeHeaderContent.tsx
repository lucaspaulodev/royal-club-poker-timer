import { NavLink } from "react-router-dom";
import { tournaments } from "../../db/tournamentsData";

const HomeHeaderContent = () => {
  const renderTournamentLinks = () => {
    return tournaments.map((tournament) => (
      <NavLink key={tournament.title} to={"/timer"}>
        <h1>PLAY TOURNAMENT</h1>
      </NavLink>
    ));
  };

  return (
    <nav className="flex gap-11">
      {renderTournamentLinks()}
    </nav>
  );
};

export default HomeHeaderContent;
