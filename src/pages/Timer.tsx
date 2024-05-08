import Counter from "../components/Counter";
import Header from "../components/Headers/Header";
import Infos from "../components/Infos";
import ProgressBar from "../components/ProgressBar";

export default function Timer() {
    return (
        <div className="space-y-6 bg-gray-900">
            <Header />
            <Counter />
            <ProgressBar />
            <Infos />
        </div>
    )
}