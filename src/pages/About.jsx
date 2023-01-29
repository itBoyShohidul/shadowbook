import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <nav className="nav-home">
        <div className="brand left">
          <Link to="/">
            <h1>Shadow Book</h1>
          </Link>
        </div>
        <div className="nav-home-link right">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="heading login-heading">
        <h2>About this Web application</h2>
      </div>
      <div className="about-page-container">
        <h3>
          This is a sample web application that developed by itBoyShohidul.
        </h3>
        <h4>Raw materals for this application:</h4>
        <ol>
          <li>HTML & JSX</li>
          <li>CSS</li>
          <li>Java Script</li>
          <li>React</li>
          <li>React Router DOM</li>
          <li>React Icons</li>
        </ol>
      </div>
    </div>
  );
}

export default About;
