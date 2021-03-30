import React from "react";
import {
  SiGmail,
  SiFacebook,
  SiInstagram,
  SiWhatsapp,
  SiTwitter,
} from "react-icons/si";

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
        <SiGmail size={32} />
        <SiFacebook size={32} />
        <SiInstagram size={32} />
        <SiWhatsapp size={32} />
        <SiTwitter size={32} />
      </div>
    </div>
  );
};

export default Index;
