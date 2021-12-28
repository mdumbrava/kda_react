import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <div>
    <div className="position">
      <div className="nav">
        <Link className="nav-links" to="/">
          <div>Home</div>
        </Link>
        <Link className="nav-links" to="#">
          <div>Welcome to KDA</div>
        </Link>
        <Link className="nav-links" to="#">
          <div>User/Login</div>
        </Link>
      </div>
      <br /><br />
    </div>
    </div>
  );
};

export default Nav;
