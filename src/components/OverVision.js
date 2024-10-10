import React from "react";
import dogs from "../assets/dogsInGroup.png"
import path from "../assets/path.png"
import dogsMask from "../assets/Mask/dogs.png"
import pathMask from '../assets/Mask/roadmask.png'
const OverVision = () => {
  return (
    <>
      <div className="project-vision-image">
        <h1 className="vis-heading">PROJECT VISION</h1>
        <img src={dogs} alt="vision-image" />
        <img className="vision-mask" src={dogsMask} alt="vision-mask" />
      </div>
      <div className="project-vision">
        <div>
          <p>
            Our mission is to honor the heritage of the Alabay by creating a
            vibrant, loyal, and powerful community. Just as the Alabay protects
            its flock, we aim to build a pack that stands strong together.
          </p>
          <h1 className="road-head">ROAD MAP</h1>
        </div>
      </div>
      <div className="path-vision">
        <div className="path-desc">
          <p>
            Our journey is just beginning. Explore our roadmap to see the
            exciting milestones and future plans we have in store. Join us as we
            grow and achieve new heights.
          </p>
          <p className="join">Join us as we grow and achieve new heights.</p>
        </div>
        <div className="pathimage2">
          <img className="path-vision-image" src={path} alt="path-image" />
          <img className="path-vision-mask" src={pathMask} alt="path-image-mask" />
        </div>
      </div>
    </>
  );
};

export default OverVision;
