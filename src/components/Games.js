import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import guardImage from "../assets/AlabayGames/alabay guard prev 2 1.png"
import heritageImage from "../assets/AlabayGames/alabay lost heritage prev 1.png"
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Games = () => {
  return (
    <>
    <div className='games'>
      <h1 className="game-heading">GAMES</h1>
      <h2>Stay tuned for upcoming games !</h2>
    </div>
    <div className="games-game">
    <Swiper 
      navigation={true} 
      modules={[Navigation,Autoplay]}
      loop={true}
      autoplay={{
        delay: 9000,  // Time between each slide in milliseconds
        disableOnInteraction: false, // Keep autoplay after user interactions
      }} 
      className="mySwiper"
    >
        <SwiperSlide>
          <div className="game">
            <img className="background-image" src={guardImage} alt="" />
            <div className='button-container'>
                <NavLink to='/game/game1'>
                  <button className=' button-1 px-4 py-2'>
                      <div>DISCOVER</div> 
                      <FaArrowRight />
                  </button>
                </NavLink>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="game">
            <img className="background-image" src={heritageImage} alt="" />
            <div className='button-container'>
                <NavLink to='/game/game2'>
                  <button className=' button-2 px-4 py-2'>
                    <div>DISCOVER</div> 
                    <FaArrowRight />
                  </button>
                </NavLink>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Games
