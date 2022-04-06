import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div>
        <div className="nav">
          <Link className="nav-links nav-left" to="/">
            <div>Home </div>
          </Link>
          <Link className="nav-links nav-center" to="/api">
            <div>Welcome to KDA</div>
          </Link>
          <Link className="nav-links nav-right" to="/">
            <div></div>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Nav;
