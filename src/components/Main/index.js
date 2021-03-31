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
import { motion } from "framer-motion";

const Index = () => {
  return (
    <motion.div
      initial={{ x: -900 }}
      animate={{ x: 0 }}
      transition={{ ease: "easeIn", duration: 1, type: "spring" }}
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
          I am a creative full stack devloper. Specialized in both front-end and
          back-end.
        </h5>
      </div>
      <div className="d-flex justify-content-start mt-3">
        <motion.a whileHover={{ scale: 1.2 }}>
          <FaFacebookF color="white" size="2em" className="mr-4" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }}>
          <FaInstagram color="white" size="2em" className="mr-4" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }}>
          <FaLinkedinIn color="white" size="2em" className="mr-4" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }}>
          <FaGithub color="white" size="2em" className="mr-4" />
        </motion.a>
        <motion.a whileHover={{ scale: 1.2 }}>
          <FaTwitter color="white" size="2em" className="mr-4" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Index;
