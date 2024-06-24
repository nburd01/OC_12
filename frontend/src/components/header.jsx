// import Logements from "../data/logements.json";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/sportsee_logo.svg";
import "../styles/header.scss";

function Header() {
  return (
    <div className="header">
      {" "}
      <Link to="/">
        <img src={logo} alt="Kasa logo" className="kasa-logo" />
      </Link>
      <nav>
        <NavLink exact="true" to="/" activeclassname="active">
          Accueil
        </NavLink>
        <NavLink to="/profile" activeclassname="active">
          Profile
        </NavLink>
        <NavLink to="/reglages" activeclassname="active">
          Réglages
        </NavLink>
        <NavLink to="/communeaute" activeclassname="active">
          Communeauté
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
