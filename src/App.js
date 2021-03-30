import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Background from "./assets/img/Background.jpg";

function App() {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${Background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Main />
      <About />
    </div>
  );
}

export default App;
