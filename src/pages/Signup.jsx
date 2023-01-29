import React, { useState, useContext } from "react";
import Navbar from "../component/Navbar";
import "../css/signup.css";
import signupImg from "../asset/images/signup.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import DataContext from "../contexts/dataContext";

function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [check, setCheck] = useState(false);
  const data = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    data.push({
      firstName: firstName,
      lastName: lastName,
      username: username,
      email: email,
      password: password,
      check: check,
    });
    setFirstName("");
    setLastName("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConPassword("");
    setCheck("");
    navigate("/login");
  };
  return (
    <div>
      <Navbar />
      <div className="heading signup-heading">
        <h1>Create an account</h1>
      </div>
      <div className="signup-container row">
        <div className="signup-left">
          <img src={signupImg} className="sign-up-img" alt="Sign_up_Image" />
        </div>
        <div className="signup-right">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label> <br />
            <input
              className="signup-input"
              type="text"
              placeholder="Enter First Name"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
            <br />
            <label htmlFor="lastName">Last Name:</label> <br />
            <input
              className="signup-input"
              type="text"
              placeholder="Enter Last Name"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
            <br />
            <label htmlFor="username">Username:</label> <br />
            <input
              className="signup-input"
              type="text"
              placeholder="Enter a username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <br />
            <label htmlFor="email">Enter Email:</label> <br />
            <input
              className="signup-input"
              type="email"
              placeholder="Enter a valid email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <br />
            <label htmlFor="password">Enter password:</label> <br />
            <input
              className="signup-input"
              type="password"
              placeholder="Enter a strong password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <label htmlFor="conpassword">Re-Enter password:</label> <br />
            <input
              className="signup-input"
              type="password"
              placeholder="Re-Enter password"
              onChange={(e) => setConPassword(e.target.value)}
              value={conPassword}
              required
            />
            <div className="checkbox">
              <input
                type="checkbox"
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
                required
              />
              <label htmlFor="checkbox">
                <span> I have agreed to all terms & conditions.</span>
              </label>
            </div>
            <button className="btn btn-large" type="submit">
              Create account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
