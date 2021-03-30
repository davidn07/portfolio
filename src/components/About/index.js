import React, { useState } from "react";
import { Button } from "react-bootstrap";
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

const Index = () => {
  const [section, setSection] = useState("about");
  return (
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start">
      <div className="w-100 p-4">
        <img src={My} className="img-fluid" height="300px" />
      </div>
      <div className="d-flex flex-column w-100 p-4">
        <div className="d-flex justify-content-between">
          <Button onClick={() => setSection("about")} variant="dark">
            About Me
          </Button>
          <Button onClick={() => setSection("skills")} variant="dark">
            Skills
          </Button>
          <Button onClick={() => setSection("exp")} variant="dark">
            Experience
          </Button>
        </div>
        <div className="d-flex flex-column align-items-start mt-3">
          {
            {
              about: (
                <div>
                  <h3>My Story</h3>
                  <p>
                    I am a full-stack developer with specialization in React.
                    Currently working as full stack developer in a IT company.
                    Also I am working on some of my personal side projects.
                  </p>
                </div>
              ),
              skills: (
                <div>
                  <h3>Skills</h3>
                  <div>
                    <FaHtml5 size={64} className="mx-3 my-2" />
                    <FaCss3Alt size={64} className="mx-3 my-2" />
                    <SiJavascript size={64} className="mx-3 my-2" />
                    <FaNode size={64} className="mx-3 my-2" />
                    <FaReact size={64} className="mx-3 my-2" />
                    <SiMongodb size={64} className="mx-3 my-2" />
                    <SiBootstrap size={64} className="mx-3 my-2" />
                    <SiGithub size={64} className="mx-3 my-2" />
                    <SiDocker size={64} className="mx-3 my-2" />
                    <FaAws size={64} className="mx-3 my-2" />
                  </div>
                </div>
              ),
              exp: (
                <div>
                  <h3>Experience</h3>
                  <div className="d-flex flex-column">
                    <h6>
                      Jan 2021 <FaLocationArrow size={14} />
                    </h6>
                    <p>
                      A startup based in Hyderbad, India where I am working as
                      full stack developer
                    </p>
                    <p>Skills: Javascript, Nodejs, Reactjs, Postgresql etc.</p>
                  </div>
                  <div className="d-flex flex-column">
                    <h6>
                      July - Decemeber 2020 <FaLocationArrow size={14} />
                    </h6>
                    <p>
                      A startup based in Aurangabad, India where I am working as
                      full stack developer
                    </p>
                    <p>Skills: Javascript, Nodejs, Reactjs, Postgresql etc.</p>
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
