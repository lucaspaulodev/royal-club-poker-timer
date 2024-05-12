import Counter from "../components/Timer/Counter";
import Header from "../components/Headers/Header";
import Infos from "../components/Timer/Infos";
import ProgressBar from "../components/Timer/ProgressBar";

const Timer = () => {
    return (
        <div className="bg-gray-900">
            <Header />
            <Counter />
            <ProgressBar />
            <Infos />
        </div>
    )
}

export default Timer