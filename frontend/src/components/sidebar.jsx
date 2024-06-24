import { Link } from "react-router-dom";
import "../styles/sidebar.scss";
import weights from "../assets/weights.svg";
import yoga from "../assets/yoga.svg";
import swim from "../assets/swim.svg";
import bike from "../assets/bike.svg";

function Sidebar() {
  return (
    <div className="sidenav">
      <div className="icons">
        <Link to="#">
          <img src={yoga} alt="" />
        </Link>
        <Link to="#">
          <img src={swim} alt="" />
        </Link>
        <Link to="#">
          <img src={bike} alt="" />
        </Link>
        <Link to="#">
          <img src={weights} alt="" />
        </Link>
      </div>
      <div className="copyright">
        <p>copyright</p>
      </div>
    </div>
  );
}

export default Sidebar;
