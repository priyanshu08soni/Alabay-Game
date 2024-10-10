import React from "react";
import historyImage from "../assets/history.png";
import Gallery from "./Gallery";
import OverVision from "./OverVision";
import FadedCards from "./FadedCards";
import Tokenomics from "./Tokenomics";
import Merchandise from "./Merchandise";
import Games from "./Games";
import GamePrev from "./GamePrev";
import SocialMedia from "./SocialMedia";
import historyMask from "../assets/Mask/historymask.png"
const MainPage = () => {
  return (
    <section className="home-wrapper-2 ">
      <div className="content custom-scrollbar">
        <div className="history-page pt-4">
          <div className="slider-home">
            <div className="slider" />
          </div>
          <div className="history-container">
            <div className="historyimage">
              <img className="history-image" src={historyImage} alt="" />
              <img className="history-mask" src={historyMask} alt="" />
            </div>
            <div className="his-desc"> 
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
        <FadedCards />
        <Tokenomics />
        <Merchandise />
        <Games />
        <GamePrev />
        <SocialMedia />
      </div>
    </section>
  );
};

export default MainPage;
