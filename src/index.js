import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Feed from "./pages/Feed";
import Post from "./features/Post";
import DataContext from "./contexts/dataContext";

const data = [
  {
    firstName: "Shohidul",
    lastName: "Islam",
    email: "msi.shohidul1@gmail.com",
    password: "12345678",
  },
  {
    firstName: "King",
    lastName: "Shadow",
    email: "itboyshohidul@gmail.com",
    password: "12345678",
  },
  {
    firstName: "King",
    lastName: "Shadow",
    email: "shohidul@gmail.com",
    password: "12345678",
  },
];

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <DataContext.Provider value={data}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Post />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  </DataContext.Provider>
);
