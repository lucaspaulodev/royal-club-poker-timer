import { NavLink } from "react-router-dom"
import { structures } from "../../db/db"

const HomeHeaderContent = () => {
    return (
      <nav className="flex gap-6">
        {structures.map((structure, index) => {
          return (
            <NavLink key={index} to={"/timer"} target="_top">
              <h1>{structure.title}</h1>
            </NavLink>
          )
        })}
      </nav>
    )
  }

  export default HomeHeaderContent