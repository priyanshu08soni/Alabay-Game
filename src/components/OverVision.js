import React from "react";
import dogs from "../assets/dogsInGroup.png"
import path from "../assets/path.png"
const OverVision = () => {
  return (
    <>
      <div className="project-vision-image">
        <h1 className="vis-heading">PROJECT VISION</h1>
        <img src={dogs} alt="vision-image" />
      </div>
      <div className="project-vision px-32">
        <div>
          <p>
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </p>
          <h1 className="road-head">ROAD MAP</h1>
        </div>
      </div>
      <div className="path-vision flex">
        <div className="path-desc w-50">
          <p>
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store. Join us as we
            grow and achieve new heights.
          </p>
          <p className="join">Join us as we grow and achieve new heights.</p>
        </div>
        <div className="pe-5 w-50">
          <img src={path} alt="path-image" />
        </div>
      </div>
    </>
  );
};

export default OverVision;
