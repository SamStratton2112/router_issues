import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () =>{
    return(
        <nav className="NavBar">
        {/* Important to have exact here so that only the active link has stlyes even if other links are similar
          - if home is active them heat becomes active home may still have active styles because it matches the / in /eat
           */}
        <NavLink exact to="/">Home</NavLink>
        <NavLink exact to="/eat">Eat</NavLink>
        <NavLink exact to="/drink">Drink</NavLink>
      </nav>
    )
}
export default NavBar;