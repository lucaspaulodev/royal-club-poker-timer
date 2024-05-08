import { Pause, Play } from "lucide-react"
import { useContext } from "react"
import { TimerContext } from "../contexts/TimerContext"

export default function Infos() {
  const { isPlaying, togglePlaying, level, broadcastedTournament } = useContext(TimerContext)

  const currentBlinds = broadcastedTournament.blinds[level]
  const nextBlinds = broadcastedTournament.blinds[level + 1]

  return (
    <section className="mx-auto flex max-w-[90rem] justify-around items-center">
      <div className="text-[1rem] md:text-2xl font-bold flex flex-col justify-center items-center md:gap-4">
        <div>BLINDS</div>
        <div className="text-[2rem] md:text-7xl">{`${currentBlinds.small}/${currentBlinds.big} (${currentBlinds.big})`}</div>
        {!!nextBlinds && <div className="text-[1rem] md:text-2xl">{`NEXT: ${nextBlinds.small}/${nextBlinds.big} (${nextBlinds.big})`}</div>}
      </div>

      <button onClick={() => togglePlaying()}>
        {isPlaying ? <Pause size={30} /> : <Play size={30} />}
      </button>
    </section>
  )
}