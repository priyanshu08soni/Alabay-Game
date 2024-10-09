import React from "react";
import img from "../assets/background.png";

const Background = () => {
  return (
    <>
      <section
        className="home-image-wrapper"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <img className="home-image" src={img} alt="" />
      </section>
      <section className="home-wrapper-1">
        <div />
        <h1 className="gradient-text">WELCOME TO ALABAY WORLD</h1>
        <div className="description">
          <div className="description-short">
            WHERE THE &nbsp;<p>LEGENDARY CENTRAL ASIAN SHEPHERD DOG</p>&nbsp;
            MEETS A NEW-AGE ADVENTURE.&nbsp;
            <p>JOIN US</p> IN
          </div>
          <div className="description-short">
            CELEBRATING THE <p>STRENGTH, LOYALTY,</p> AND <p>HERITAGE</p> OF THE
            ALABAY BREED.
          </div>
        </div>
      </section>
    </>
  );
};

export default Background;
