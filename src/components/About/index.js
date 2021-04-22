import React, { useState } from "react";
import { ProgressBar } from "react-bootstrap";
import {
  FaHtml5,
  FaNode,
  FaReact,
  FaCss3Alt,
  FaAws,
  FaLocationArrow,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiBootstrap,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import My from "../../assets/img/My.jpg";
import { AnimatePresence, motion } from "framer-motion";

const Index = () => {
  const [section, setSection] = useState("about");
  return (
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
      <div className="w-100 p-4">
        <motion.img
          animate={{ y: -15 }}
          transition={{ yoyo: Infinity, duration: 1, type: "spring" }}
          src={My}
          className="img-fluid"
          height="300px"
          id="about"
        />
      </div>
      <div className="d-flex flex-column w-100 p-4">
        <div className="d-flex justify-content-between">
          <motion.button
            className={section === "about" ? "btn btn-warning" : "btn btn-dark"}
            whileHover={{ scale: 0.8 }}
            onClick={() => setSection("about")}
            variant="dark"
          >
            About Me
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.8 }}
            className={
              section === "skills" ? "btn btn-warning" : "btn btn-dark"
            }
            onClick={() => setSection("skills")}
            variant="dark"
          >
            Skills
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.8 }}
            className={section === "exp" ? "btn btn-warning" : "btn btn-dark"}
            onClick={() => setSection("exp")}
            variant="dark"
          >
            Experience
          </motion.button>
        </div>
        <div
          className="d-flex flex-column align-items-start mt-3"
          sytle={{ position: "relative" }}
        >
          {
            {
              about: (
                <AnimatePresence>
                  <motion.div
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                  >
                    <h3>My Story</h3>
                    <p>
                      I am a full-stack developer with specialization in React.
                      Currently working as full a stack developer in an IT
                      company. Also, I am working on some of my personal side
                      projects.
                    </p>
                  </motion.div>
                </AnimatePresence>
              ),
              skills: (
                <AnimatePresence>
                  <motion.div
                    initial={{ x: 400 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    className="w-100"
                  >
                    <h3>Skills</h3>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaHtml5 size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={90} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaCss3Alt size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={80} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <SiJavascript size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={80} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaNode size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={70} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaReact size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={75} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <SiMongodb size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={65} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <SiBootstrap size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={90} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <SiGithub size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={80} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <SiDocker size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={50} />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <FaAws size={32} className="mx-3 my-2" />
                      <ProgressBar className="w-100" animated now={50} />
                    </div>
                  </motion.div>
                </AnimatePresence>
              ),
              exp: (
                <div>
                  <h3>Experience</h3>
                  <div className="d-flex flex-column">
                    <h6>
                      Jan 2021 <FaLocationArrow size={14} />
                    </h6>
                    <h6>Soulpage IT Solutions</h6>
                    <p>
                      A startup based in Hyderbad, India where I am working as
                      full stack developer
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <h6>
                      July - Decemeber 2020 <FaLocationArrow size={14} />
                    </h6>
                    <h6>The Stencil</h6>
                    <p>
                      A startup based in Aurangabad, India where I am working as
                      full stack developer
                    </p>
                  </div>
                </div>
              ),
            }[section]
          }
        </div>
      </div>
    </div>
  );
};

export default Index;
