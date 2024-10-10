import React, { useState, useRef } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import abilities from '../assets/AlabayGames/AlabayAdventure-TheLostHeritage/Abilities.png'
import artifacts from '../assets/AlabayGames/AlabayAdventure-TheLostHeritage/artifacts.png'
import locations from '../assets/AlabayGames/AlabayAdventure-TheLostHeritage/locations preview.png'
import overview from '../assets/AlabayGames/AlabayAdventure-TheLostHeritage/overview.png'
import { NavLink } from "react-router-dom";
const GamePageToggle2 = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = containerRef.current.scrollTop;
    const maxScroll =
      containerRef.current.scrollHeight - containerRef.current.clientHeight;
    const scrollValue = (scrollTop / maxScroll) * 100;
    setScrollProgress(scrollValue);
  };

  return (
    <div
      className="game-page2-scroll-container"
      ref={containerRef}
      onScroll={handleScroll}
    >
      <div
        className="game-page-card"
        style={{ opacity: 1 - scrollProgress / 100 }}
      >
        <div className="game-page2-card-box1">
          <p>
          Take on the role of the legendary Alabay on a quest to uncover the ancient secrets of its ancestors. 
          </p>
          <button className="ps-3 pr-16">
            <IoMdArrowDropright className="text-4xl bg-gray-900 text-white rounded-3xl p-1" />
            <div>PLAY</div>
          </button>
        </div>
        <div className="game-page2-card-box2">
          <h2>
            <div className="game2-prev-name">GAME</div>
            <div>PREVIEW</div>
          </h2>
          <div className="flex flex-wrap gap-5">
            <img className="unique-image" src={overview} alt="" />
            <img className="simple-image" src={abilities} alt="" />
            <img className="simple-image" src={artifacts} alt="" />
            <img className="unique-image" src={locations} alt="" />
          </div>
        </div>
      </div>
      <div
        className="game2-page-card1"
        style={{ opacity: scrollProgress / 100 }}
      >
        <h2 className="pt-5 game2-prev-name">FEATURES</h2>
        <div className="features">
          <p className="flex flex-wrap py-2">
            <div>Explore a variety of landscapes, including </div>
            <div className="game2-prev-name ps-2">mountains</div>,
            <div className="game2-prev-name ps-2">forests</div>,
            <div className="game2-prev-name px-2">deserts</div> and
            <div className="game2-prev-name ps-2">ancient ruins</div>.
          </p>
          <p className="flex flex-wrap py-2">
            <div>Use the Alabay's</div>
            <div className="game2-prev-name px-2">abilities</div>
            <div>to solve</div>
            <div className="game2-prev-name px-2">puzzles</div>
            <div>
              that involve moving objects, activating mechanisms, or finding
              hidden clues.
            </div>
          </p>
          <p className="py-2">
            Discover relics that tell the story of the Alabay’s ancestors, each
            piece contributing to a larger narrative about the
            <div>breed's role in ancient history.</div>
          </p>
          <p className="py-2">
            Unlock new skills and abilities for the Alabay, enhancing its
            capacity to explore and solve puzzles.
          </p>
          <p className="pt-2">Challenge Modes:</p>
          <div className="pb-2">
            <p className="flex flex-wrap px-3">
              <div>-</div>
              <div className="game2-prev-name px-2">Time Trials</div>
              <div>
                : Compete in special timed challenges where the Alabai must
                navigate through complex mazes or
                <div className="ps-2">
                  complete puzzles within a time limit.
                </div>
              </div>
            </p>
            <p className="flex flex-wrap px-3">
              <div>-</div>
              <div className="game2-prev-name px-2">Exploration Mastery</div>
              <div>
                : A mode that rewards players for fully exploring every nook and
                cranny of the game's world,
                <div className="ps-2">uncovering all secrets</div>
              </div>
            </p>
          </div>
        </div>
        <div className="gamepage-buttons">
          <button className=" bg-white ps-2 py-1 text-black">
            <IoMdArrowDropright className="text-4xl bg-gray-900 text-white rounded-3xl  p-1" />
            <div>PLAY</div>
          </button>
          <button className="flex items-center justify-center bg-transparent">
            <NavLink to="/">EXIT</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamePageToggle2;
