import "./navBar.css";
import { Link } from "react-router-dom";
import home from "../../assets/023-home.svg";
import about from "../../assets/010-user.svg";
import projects from "../../assets/013-image.svg";
import contact from "../../assets/009-message.svg";

function NavBar() {
  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <Link to="/">
            <img src={home} alt="" className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/about">
            <img src={about} alt="" className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <img src={projects} alt="" className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img src={contact} alt="" className="icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
