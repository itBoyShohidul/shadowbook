import React from "react";
import { Link } from "react-router-dom";
import css from "../css/nav.module.css";
import { FaUserCircle, FaSignInAlt } from "react-icons/fa";

function LoggedNav() {
  return (
    <nav className={css.nav}>
      <Link to="/feed">News Feed</Link>
      <Link to="/home">
        <span className="nav-icon">
          <FaSignInAlt />
        </span>{" "}
        Log Out
      </Link>
      <Link to="/profile">
        <FaUserCircle className="nav-icon" /> itBoyShohidul
      </Link>
    </nav>
  );
}

export default LoggedNav;
