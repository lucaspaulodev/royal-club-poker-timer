import { NavLink } from "react-router-dom"
import { tournaments } from "../../db/tournamentsData"

const HomeHeaderContent = () => {
  return (
    <nav className="flex gap-11">
      {tournaments.map((tournament, index) => {
        return (
          <NavLink key={index} to={"/timer"}>
            <h1>{tournament.title}</h1>
          </NavLink>
        )
      })}
    </nav>
  )
}

export default HomeHeaderContent