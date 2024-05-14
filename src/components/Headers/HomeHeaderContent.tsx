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
  const { broadcastedTime, broadcastedIsPlaying, broadcastedLevel, togglePlaying, setBroadcastedTournament } = useContext(TimerContext)

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
    <nav className="w-full flex justify-between col-start-2 col-end-2">
      <div>
        <img src={logo} className="w-12" alt="Royal Club logo." title="Royal Club's logo."/>
      </div>
      <div className="flex gap-4 items-center sm:gap-8">
        {renderTimerPage()}
        <button onClick={() => togglePlaying()} title={broadcastedIsPlaying ? "Pause tournament." : "Play tournament."}>
          {broadcastedIsPlaying ? <Pause /> : <Play />}
        </button>
        <p className="text-sm sm:text-base">{`${formatTime(broadcastedTime.minutes)}:${formatTime(broadcastedTime.seconds)}`}</p>
        <p className="text-sm sm:text-base">{`Level ${broadcastedLevel + 1}`}</p>
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
