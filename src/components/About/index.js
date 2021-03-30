import React from "react";
import { Button } from "react-bootstrap";

const Index = () => {
  return (
    <div className="container d-flex flex-column flex-md-row justify-content-between">
      <div className="w-50" style={{ height: "200px" }}>
        <h1>Something will come here</h1>
      </div>
      <div className="w-50 d-flex flex-column">
        <div className="d-flex justify-content-between">
          <Button variant="dark">About Me</Button>
          <Button variant="dark">Skills</Button>
          <Button variant="dark">Experience</Button>
        </div>
        <div className="d-flex flex-column align-items-start mt-3">
          <h3>My Story</h3>
          <p>I am a full-stack developer with specialization in React.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
