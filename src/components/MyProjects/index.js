import React from "react";
import PrayerRequestApp from "assets/img/PrayerRequestApp.png";

const Index = () => {
  return (
    <div className="container d-flex flex-column align-items-center">
      <h4>Projects</h4>
      <div className="row w-100">
        <div className="col-12 col-md-4">
          <div className="card project p-0 d-flex flex-column align-items-center">
            <img src={PrayerRequestApp} className="img-fluid" height="200px" />
            <div className="overlay p-2 d-flex flex-column align-items-center">
              <h5 className="text-white">Prayer Request App</h5>
              <p className="text-white">
                Prayer request app to post prayer requests
              </p>
              <p className="text-white text-center">
                User can signup and login to post their prayer requests and can
                see other users prayer requests
              </p>
              <p className="text-white text-center">🖥 Click to visit</p>
            </div>
          </div>
        </div>
        {/* <div className="col-12 col-md-4">
          <div className="card p-3 d-flex flex-column align-items-center">
            <h6>Prayer Request App</h6>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div className="card p-3 d-flex flex-column align-items-center">
            <h6>Prayer Request App</h6>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Index;
