import { useLocation } from "react-router-dom";
import TimerHeaderContent from "./TimerHeaderContent";
import HomeHeaderContent from "./HomeHeaderContent";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-neutral-950 px-28 py-1">
      {pathname === "/timer" ? <TimerHeaderContent /> : <HomeHeaderContent />}
    </header>
  );
};

export default Header;
