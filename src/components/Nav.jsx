import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav id="nav-section">
      <Link to={`/`}>Home</Link>
      <a href="#">Userlist</a>
      <a href="#">{user}</a>
    </nav>
  );
};

export default Nav;
