import { NavLink } from "react-router-dom";
import { tournaments } from "../../db/tournamentsData";
import { Timer } from "lucide-react";

const TournamentList = () => {
  return (
    <>
      {tournaments.map((tournament) => (
        <NavLink
          key={tournament.title}
          to={"/timer"}
          target="_blank"
          aria-label="Go to timer"
          title="Go to timer!"
        >
          <Timer />
        </NavLink>
      ))}
    </>
  );
};

export default TournamentList;
