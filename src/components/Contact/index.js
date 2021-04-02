import React from "react";
import {
  SiGmail,
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiTwitter,
} from "react-icons/si";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="container mt-5 box p-4 d-flex flex-column align-items-center">
      <h4>Contact Me</h4>
      <div className="d-flex flex-column flex-md-row justify-content-between mt-5 w-100">
        <div className="d-flex flex-column">
          <h5>My Address :</h5>
          <p>SRPF road, Jalna, Maharashtra</p>
        </div>
        <div className="d-flex flex-column">
          <h5>My Email :</h5>
          <p>nirmaldavid96@gmail.com</p>
        </div>
        <div className="d-flex flex-column">
          <h5>My Phone :</h5>
          <p>+919766199459</p>
        </div>
      </div>
      <h4 className=" mt-5">Or</h4>
      <div className="d-flex justify-content-between w-50 mt-5">
        <motion.a
          className="text-dark"
          whileHover={{ scale: 1.2 }}
          href="mailto:nirmaldavid96@gmail.com"
        >
          <SiGmail size={32} />
        </motion.a>
        <motion.a
          className="text-dark"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          href="https://www.facebook.com/david.nirmal.3"
        >
          <SiFacebook size={32} />
        </motion.a>
        <motion.a
          className="text-dark"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          href="https://www.instagram.com/davidnirmal07/"
        >
          <SiInstagram size={32} />
        </motion.a>
        <motion.a
          className="text-dark"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          href="https://wa.link/ovuy55"
        >
          <SiWhatsapp size={32} />
        </motion.a>
        <motion.a
          className="text-dark"
          whileHover={{ scale: 1.2 }}
          target="_blank"
          href="https://twitter.com/ndavid77"
        >
          <SiTwitter size={32} />
        </motion.a>
      </div>
    </div>
  );
};

export default Index;
