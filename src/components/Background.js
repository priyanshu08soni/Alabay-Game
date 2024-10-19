import React from "react";

const Background = () => {
  return (
    <>
      <section
        className="home-image-wrapper"
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div className="home-image"></div>
      </section>
      <section className="home-wrapper-1">
        <h1 className="gradient-text">WELCOME TO ALABAY WORLD</h1>
        <div className="description">
          <div className="description-short">
            WHERE THE &nbsp;<p>LEGENDARY CENTRAL ASIAN SHEPHERD DOG</p>&nbsp;
            MEETS A NEW-AGE ADVENTURE.&nbsp;
            <p>JOIN US</p>&nbsp; IN
          </div>
          <div className="description-short">
            CELEBRATING THE <p>&nbsp;STRENGTH, LOYALTY,&nbsp;</p> AND <p>&nbsp;HERITAGE&nbsp;</p> OF THE
            ALABAY BREED..
          </div>
        </div>
      </section>
    </>
  );
};

export default Background;
