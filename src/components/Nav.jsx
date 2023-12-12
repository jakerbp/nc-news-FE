import { useContext } from "react";
import { UserContext } from "../contexts/User";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav id="nav-section">
      <a href="/">Home</a>
      <a href="#">Userlist</a>
      <a href="#">{user}</a>
    </nav>
  );
};

export default Nav;
