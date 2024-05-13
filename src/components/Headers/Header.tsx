import { useLocation } from "react-router-dom";
import TimerHeaderContent from "./TimerHeaderContent";
import HomeHeaderContent from "./HomeHeaderContent";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="flex first-line:px-4 py-4 px-8 text-2xl font-semibold bg-zinc-950">
      {pathname === '/timer' ? <TimerHeaderContent /> : <HomeHeaderContent />}
    </header>
  );
}

export default Header;