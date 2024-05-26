import Header from "../components/Headers/Header";
import StructureManager from "../components/Home/StructureManager";
import TimerHandling from "../components/Home/TimerHandling";

const Home = () => {
  return (
    <div className="flex flex-col space-y-6 bg-gray-900">
      <Header />
      <StructureManager />
      <TimerHandling />
    </div>
  );
};

export default Home;
