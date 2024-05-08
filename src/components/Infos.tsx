import { Pause, Play } from "lucide-react"
import { useContext } from "react"
import { TimerContext } from "../contexts/TimerContext"

export default function Infos() {
  const { isPlaying, togglePlaying, level, currentTournament } = useContext(TimerContext)

  const currentBlinds = currentTournament.blinds[level]
  const nextBlinds = currentTournament.blinds[level + 1]

  return (
    <section className="mx-auto flex max-w-[90rem] justify-between items-center">
      <div className="text-2xl font-bold flex flex-col justify-center items-center gap-4">
        <div>BLINDS</div>
        <div className="text-7xl">{`${currentBlinds.small}/${currentBlinds.big} (${currentBlinds.big})`}</div>
        {!!nextBlinds && <div>{`NEXT ${nextBlinds.small}/${nextBlinds.big} (${nextBlinds.big})`}</div>}
      </div>

      <button onClick={() => togglePlaying()}>
        {isPlaying ? <Pause size={30} /> : <Play size={30} />}
      </button>

      <div className="text-2xl font-bold flex flex-col justify-center items-center gap-4">
        <div>ANTE</div>
        <div className="text-7xl">20</div>
        {!!nextBlinds && <div>NEXT 30</div>}
      </div>
    </section>
  )
}