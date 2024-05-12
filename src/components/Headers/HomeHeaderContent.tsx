import { NavLink } from "react-router-dom";
import { tournaments } from "../../db/tournamentsData";
import { useCallback, useContext } from "react";
import { TimerContext } from "../../contexts/TimerContext";
import { Ban, CirclePlus, Pause, Play, Timer } from "lucide-react";
import { formatTime } from "../../lib/formatTime";
import { TournamentProps } from "../../types/structure";
import { BlindsProps } from "../../types/blinds";
import logo from "../../assets/ROYAL-CLUB.png"

const HomeHeaderContent = () => {
  const { broadcastedTime, broadcastedIsPlaying, togglePlaying, setBroadcastedTournament } = useContext(TimerContext)

  const addLevel = useCallback((breakLevel = false) => {
    setBroadcastedTournament((prevTournament: TournamentProps) => {
      const lastLevel = prevTournament.blinds[prevTournament.blinds.length - 1];
      const newLevel: BlindsProps = breakLevel ? { small: 0, big: 0, time: 15, break: true } : { ...lastLevel, break: false };
      const updatedBlinds = [...prevTournament.blinds, newLevel];

      return { ...prevTournament, blinds: updatedBlinds };
    });
  }, [setBroadcastedTournament]);

  const renderTimerPage = () => {
    return tournaments.map((tournament) => (
      <NavLink key={tournament.title} to={"/timer"} target="_blank" aria-label="Go to timer" title="Go to timer!">
        <Timer />
      </NavLink>
    ));
  };

  return (
    <nav className="w-full flex justify-between">
      <div>
        <img src={logo} className="w-12" alt="Royal Club logo." title="Royal Club's logo."/>
      </div>
      <div className="flex gap-11 items-center">
        {renderTimerPage()}
        <button onClick={() => togglePlaying()} title={broadcastedIsPlaying ? "Pause tournament." : "Play tournament."}>
          {broadcastedIsPlaying ? <Pause /> : <Play />}
        </button>
        <h1>{`${formatTime(broadcastedTime.minutes)}:${formatTime(broadcastedTime.seconds)}`}</h1>
        <button onClick={() => addLevel(false)} title="Add a new level.">
          <CirclePlus />
        </button>
        <button onClick={() => addLevel(true)} title="Add a new break.">
          <Ban />
        </button>
      </div>
    </nav>
  );
};

export default HomeHeaderContent;
