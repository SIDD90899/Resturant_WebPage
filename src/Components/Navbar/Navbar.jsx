import "./Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <Link to="/" className="title">
          Ascent
        </Link>
        <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink id="not" to="/menu">
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/ourstory">Our Story</NavLink>
          </li>
          <li>
            <NavLink to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="reservation">Reservation</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
