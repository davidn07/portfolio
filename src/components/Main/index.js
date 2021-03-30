import React from "react";
import { Badge } from "react-bootstrap";
import Typical from "react-typical";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Index = () => {
  return (
    <div
      className="container d-flex flex-column justify-content-center"
      style={{ height: "100%" }}
    >
      <div>
        <Badge variant="light">Hi There !</Badge>
      </div>
      <div>
        <h1 className="text-white">I am David Nirmal</h1>
      </div>
      <div>
        <h1 className="text-white mt-2">
          <Typical
            steps={[
              "A Developer",
              1500,
              "I love to Develop",
              1500,
              "A Web Designer",
              1500,
              "I love to Design",
              1500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h1>
      </div>
      <div>
        <h5 className="text-white mt-2">
          I am creative full stack devloper. Specialized in both front-end and
          back-end.
        </h5>
      </div>
      <div className="d-flex justify-content-start mt-3">
        <FaFacebookF color="white" size="2em" className="mr-4" />
        <FaInstagram color="white" size="2em" className="mr-4" />
        <FaLinkedinIn color="white" size="2em" className="mr-4" />
        <FaGithub color="white" size="2em" className="mr-4" />
        <FaTwitter color="white" size="2em" className="mr-4" />
      </div>
    </div>
  );
};

export default Index;
