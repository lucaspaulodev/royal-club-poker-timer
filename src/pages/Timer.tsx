import Counter from "../components/Counter";
import Header from "../components/Header";
import Infos from "../components/Infos";
import ProgressBar from "../components/ProgressBar";

export default function Timer() {
    return (
        <>
            <Header/>
            <Counter/>
            <ProgressBar/>
            <Infos/>
        </>
    )
}