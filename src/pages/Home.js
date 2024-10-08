import React from "react";
import img from "../assets/background.png";
import historyImage from "../assets/history.png";
import Gallery from "../components/Gallery";
import OverVision from "../components/OverVision";
import FadedCards from "../components/FadedCards";
import Tokenomics from "../components/Tokenomics";
import Merchandise from "../components/Merchandise";
import Games from "../components/Games";
import GamePrev from "../components/GamePrev";
import SocialMedia from "../components/SocialMedia";
const Home = () => {
  return (
    <div className="custom-scrollbar">
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
      <section className="home-wrapper-2 ">
        <div className="content custom-scrollbar">
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
          <Gallery />
          <OverVision />
          <FadedCards/>
          <Tokenomics/>
          <Merchandise/>
          <Games/>
          <GamePrev/>
          <SocialMedia/>
        </div>
      </section>
    </div>
  );
};

export default Home;
