import { useLocation } from "react-router-dom";
import TimerHeaderContent from "./TimerHeaderContent";
import HomeHeaderContent from "./HomeHeaderContent";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <header className="flex justify-around px-4 py-4 text-2xl font-semibold bg-zinc-950">
      {pathname === '/timer' ? <TimerHeaderContent /> : <HomeHeaderContent />}
    </header>
  );
}
