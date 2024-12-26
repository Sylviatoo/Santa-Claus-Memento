import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";

export default function NavBar() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Le Memento</NavLink>
          </li>
          <li>
            <NavLink to="/thedreamteam">La Dream Team</NavLink>
          </li>
        </ul>
      </nav>
    );
}
