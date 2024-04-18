import { useContext } from "react"
import { TimerContext } from "../contexts/TimerContext"

export default function Counter() {
    const {minutes, seconds} = useContext(TimerContext)
    return (
        <main className="mx-auto flex max-w-6xl justify-center">
            <div className="text-[16rem] font-bold">
            {`${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
            </div>
        </main>
    )
}