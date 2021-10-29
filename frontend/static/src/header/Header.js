import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import logo from "../logo.png";
export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg prim-nav-container">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li>
              <NavLink className="navbar-brand" to="/">
                {/* <img src={logo} /> */}
                The Chat Room
              </NavLink>
            </li>
            <li className="nav-item secondary-nav-item p-3">
              <NavLink to="/register">Register</NavLink>
            </li>
            <li className="nav-item secondary-nav-item p-3">
              <NavLink to="/login">Login</NavLink>
            </li>

            <li className="nav-item secondary-nav-item p-3">
              <NavLink to="/chat">Chat</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
