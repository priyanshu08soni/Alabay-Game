import React from "react";
import img from "../assets/background.png";
import historyImage from "../assets/history.png";
import dogs from "../assets/dogsInGroup.png"
import path from "../assets/path.png"
import Gallery from "../components/Gallery"
const Home = () => {
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
      <section className="home-wrapper-2">
        <div className="content">
          <div className="slider-home">
            <div className="slider" />
          </div>
          <div className="history-page flex pe-5 pt-16">
            <div className="w-50">
              <img className="history-image" src={historyImage} alt="" />
            </div>
            <div className="his-desc w-50">
              <div>
                <h2>History Of</h2>
                <h1>ALABAY</h1>
                <p>
                  The Central Asian Shepherd Dog, also known as Alabay, has been
                  a guardian of livestock and property for centuries.
                  Originating from Central Asia, these dogs are renowned for
                  their courage, strength, and loyalty.
                </p>
              </div>
            </div>
          </div>
          <div className="media">
            <Gallery/>
          </div>
          <div className="project-vision-image">
            <h1 className="vis-heading">PROJECT VISION</h1>
            <img src={dogs} alt="" />
          </div>
          <div className="project-vision px-32">
            <div>
              <p>Our mission is to honor the heritage of the Alabay by creating a vibrant, loyal, and powerful community. Just as the Alabay protects its flock, we aim to build a pack that stands strong together.</p>
              <h1 className="road-head">ROAD MAP</h1>
            </div>
          </div>
          <div className="path-vision flex absolute">
            <div className="">
              <p>Our journey is just beginning. Explore our roadmap to see the exciting milestones and future plans we have in store. Join us as we grow and achieve new heights.</p>
              <p>Join us as we grow and achieve new heights.</p>
            </div>
            <div className="">
              <img src={path} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
