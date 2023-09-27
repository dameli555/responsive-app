import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../asserts/logo.png";

import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar-style.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link>
            <img src={Logo} alt=" logo" />
          </Link>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/price" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/faq" className="nav-link">
              FAQ
            </Link>
          </li>
          <li className="nav-items">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#ffffff" }}></FaBars>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
