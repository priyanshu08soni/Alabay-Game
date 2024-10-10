import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the base Swiper styles
import "swiper/css/navigation"; // Import styles for navigation
import "swiper/css/pagination"; // Import styles for pagination
import artifacts from "../assets/AlabayGames/AlabayAdventure-TheLostHeritage/artifacts.png"
import abilities from "../assets/AlabayGames/Abilities 2.png"
import guard from "../assets/AlabayGames/AlabayGuard/image 3 alabay guard.png"
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import the modules correctly


const GamePrev = () => {
  return (
    <div className='gameprev-container'>
        <div className="gameprev-heading flex gap-3">
            <h1>GAME</h1>
            <h2>PREVIEWS</h2>
        </div>
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]} // Pass modules like this
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 6000,  // Time between each slide in milliseconds
          disableOnInteraction: false, // Keep autoplay after user interactions
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,  // 1 slide per view on small screens
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 2,  // 2 slides per view on medium screens
          },
          // when window width is >= 768px
          1100: {
            slidesPerView: 3,  // 3 slides per view on larger tablets
          },
          // when window width is >= 1024px
        }}
        navigation // No need to specify elements manually
      >
        <SwiperSlide>
            <div className="gameprev-item flex items-center justify-center my-8 text-black mx-auto">
                <img src={artifacts} alt="artifacts" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="gameprev-item flex items-center justify-center my-8 text-black mx-auto">
                <img src={abilities} alt="abilities" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="gameprev-item flex items-center justify-center my-8 text-black mx-auto">
                <img src={guard} alt="guard" />
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="gameprev-item flex items-center justify-center my-8 text-black mx-auto">
                <img src={artifacts} alt="artifacts" />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GamePrev
