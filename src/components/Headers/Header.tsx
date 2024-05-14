import { useLocation } from "react-router-dom";
import TimerHeaderContent from "./TimerHeaderContent";
import HomeHeaderContent from "./HomeHeaderContent";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="grid grid-cols-[1fr_12fr_1fr] py-4  text-2xl font-semibold bg-zinc-950">
      {pathname === '/timer' ? <TimerHeaderContent /> : <HomeHeaderContent />}
    </header>
  );
}

export default Header;