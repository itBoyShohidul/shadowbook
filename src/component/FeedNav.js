import React from "react";
import { Link } from "react-router-dom";
import "../css/feedNav.css";
import {
  FaUserCircle,
  FaSignInAlt,
  FaHome,
  FaPlay,
  FaFacebookMessenger,
  FaBell,
} from "react-icons/fa";

function FeedNav() {
  return (
    <nav className="nav">
      <div className="feed-logo">
        <h2>Shadow Book</h2>
      </div>

      <div className="left">
        <Link to="/feed">
          <FaHome />
        </Link>
        <Link to="/feed">
          <FaPlay />
        </Link>
        <Link to="/message">
          <FaFacebookMessenger />
        </Link>
        <Link to="/notification">
          <FaBell />
        </Link>
      </div>
      <div className="right">
        <Link to="/feed">News Feed</Link>
        <Link to="/home">
          <FaSignInAlt /> Log Out
        </Link>
        <Link to="/profile">
          <FaUserCircle /> itBoyShohidul
        </Link>
      </div>
    </nav>
  );
}

export default FeedNav;
