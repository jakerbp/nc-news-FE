import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/User";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const { user } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    axios
      .get(`https://newssite-zy4v.onrender.com/api/users/${user}`)
      .then((res) => {
        setAvatar(res.data.user.avatar_url);
      });
  });

  return (
    <div id="nav-container">
      <nav id="nav-section">
        <Link to={`/`}>Home</Link>
      </nav>
      <div className="current-user">
        <p id="current-user-name">Logged in: {user}</p>
        <div className="user-avatar-container"><img alt='user avatar' src={avatar} className="user-avatar"/></div>
      </div>
    </div>
  );
};

export default Nav;
