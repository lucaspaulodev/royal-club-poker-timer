import Header from "../components/Headers/Header";
import { tournaments } from "../db/tournamentsData";

export default function Home() {
    return (
        <div className="space-y-6 bg-gray-900">
            <Header />
            <table className="table-fixed w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 uppercase">Level</th>
                        <th className="px-4 py-2 uppercase">small blind</th>
                        <th className="px-4 py-2 uppercase">big blind</th>
                        <th className="px-4 py-2 uppercase">ante</th>
                        <th className="px-4 py-2 uppercase">time</th>
                    </tr>
                </thead>
                <tbody>
                    {tournaments[0]?.blinds.map((level, index) => {
                        return (
                            <tr key={index}>
                                <td className="border px-4 py-2">
                                    <div className="flex justify-center">
                                        {index + 1}
                                    </div>
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex justify-center">
                                        {level.small}
                                    </div>
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex justify-center">
                                        {level.big}
                                    </div>
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex justify-center">
                                        {level.big}
                                    </div>
                                </td>
                                <td className="border px-4 py-2">
                                    <div className="flex justify-center">
                                        {`${level.time} min`}
                                    </div>
                                </td>
                            </tr>
                        )

                    })}
                </tbody>
            </table>
        </div>
    )
}