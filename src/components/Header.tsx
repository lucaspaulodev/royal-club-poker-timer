import { useLocation } from "react-router-dom";
import TimerHeaderContent from "./Headers/TimerHeaderContent";
import HomeHeaderContent from "./Headers/HomeHeaderContent";

export default function Header() {
  const { pathname } = useLocation()

  const getHeader = () => {
    if (pathname === '/timer') {
      return <TimerHeaderContent />
    } else {
      return <HomeHeaderContent />
    }
  }

  return (
    <header className="flex justify-around px-4 py-4 text-2xl font-semibold bg-zinc-950">
      {getHeader()}
    </header>
  )
}