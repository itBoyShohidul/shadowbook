import React, { useContext } from "react";
import Navbar from "../component/Navbar";
import loginImg from "../asset/images/login.jpg";
import { useState } from "react";
import "../css/login.css";
import { useNavigate } from "react-router-dom";
import Footer from "../component/Footer";
import DataContext from "../contexts/dataContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();
  const data = useContext(DataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    data.map((usr) => {
      if (usr.email === email && usr.password === password) {
        navigate("/profile");
      } else {
        setLoginError(true);
      }
      return null;
    });
  };

  return (
    <div className="App">
      <Navbar />
      <div className="heading login-heading">
        <h1>Log in your account</h1>
      </div>
      <div className="login-container">
        <div className="login-left">
          <img src={loginImg} className="sign-up-img" alt="Sign_up_Image" />
        </div>
        <div className="login-right">
          {loginError && (
            <h3 className="login-error">Your data does not match</h3>
          )}
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter Email:</label> <br />
            <input
              className="login-input"
              type="email"
              placeholder="Enter a valid email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <br />
            <label htmlFor="password">Enter password:</label> <br />
            <input
              className="login-input"
              type="password"
              placeholder="Enter a strong password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <br />
            <button className="btn btn-large" type="submit">
              Log in
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
