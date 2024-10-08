import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import guardImage from "../assets/Alabay Games/alabay guard prev 2 1.png"
import heritageImage from "../assets/Alabay Games/alabay lost heritage prev 1.png"
import { FaArrowRight } from "react-icons/fa";
const Games = () => {
  return (
    <>
    <div className='games'>
      <h1 className="game-heading">GAMES</h1>
      <h2>Stay tuned for upcoming games !</h2>
    </div>
    <div className="games-game">
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="game">
            <img className="background-image" src={guardImage} alt="" />
            <div className='button-container'>
                <button className=' button-1 px-4 py-2'>
                    <div>DISCOVER</div> 
                    <FaArrowRight />
                </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="game">
            <img className="background-image" src={heritageImage} alt="" />
            <div className='button-container'>
                <button className=' button-2 px-4 py-2'>
                    <div>DISCOVER</div> 
                    <FaArrowRight />
                </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Games
