import { useContext } from "react"
import { TimerContext } from "../../contexts/TimerContext"
import { Settings } from "lucide-react"

const TimerHeaderContent = () => {
    const { level } = useContext(TimerContext)
    return (
        <>
            <h1>Royal Club Timer</h1>
            <div>
                {`LEVEL ${level + 1}`}
            </div>
            <button className="flex gap-2" >
                Settings <Settings size={30} />
            </button>
        </>

    )
}

export default TimerHeaderContent