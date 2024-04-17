import { Settings } from "lucide-react";
import { useContext } from "react";
import { TimerContext } from "../store/TimerContext";

export default function Header() {
    const {level} = useContext(TimerContext)
    return (
        <header className="flex justify-around px-4 py-4 text-2xl font-semibold bg-zinc-950">
        <h1>Royal Club Timer</h1>
        <div>
          {`LEVEL ${level + 1}`}
        </div>
        <button className="flex gap-2" >
          Settings <Settings size={30}/> 
        </button>
      </header>
    )
}