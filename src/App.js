import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Background from "./assets/img/Background.jpg";
import MyProjects from "components/MyProjects";

function App() {
  return (
    <div
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${Background})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      <Main />
      <About />
      {/* <Services /> */}
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
