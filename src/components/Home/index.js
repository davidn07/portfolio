import React from "react";
import Background from "../../assets/img/Background.jpg";
import Typical from "react-typical";

function Index() {
  return (
    <div className="container p-0 h-100">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${Background})`,
          height: "600px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          padding: "20px",
          width: "100%",
        }}
      >
        <h1 className="text-white">Hi, I am a Web Developer</h1>
        <h3 className="text-white d-flex">
          <Typical
            loop={Infinity}
            wrapper="p"
            steps={[
              "HTML",
              1500,
              "CSS",
              1500,
              "",
              1500,
              "JavaScript",
              1500,
              "Python",
              1500,
              "Node JS",
              1500,
              "React JS",
              1500,
            ]}
          />
        </h3>
      </div>
      <div className="d-md-flex d-flex-column mt-2 justify-content-between">
        <div class="card">
          <div class="card-body">
            <h4>This is Card for some content</h4>
          </div>
        </div>
        <div class="card ">
          <div class="card-body">
            <h4>This is Card for some content</h4>
          </div>
        </div>
        <div class="card ">
          <div class="card-body">
            <h4>This is Card for some content</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
