import React from "react";
import { Link } from "react-router-dom";
import css from "../css/nav.module.css";
function Navbar() {
  return (
    <nav className={css.nav}>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Sign up</Link>
    </nav>
  );
}

export default Navbar;
