import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import blackhoodiebck from "../assets/AlabayMerch/black hoodie bck.png";
import blackhoodie from "../assets/AlabayMerch/black hoodie.png";
import bluecapbck from "../assets/AlabayMerch/blue cap bck.png";
import bluecap from "../assets/AlabayMerch/cap mockup.png";
import pinkteebck from "../assets/AlabayMerch/pink tee bck.png";
import pinktee from "../assets/AlabayMerch/pink tshirt.png";
import yellowtee from "../assets/AlabayMerch/yellow tshirt.png";
import yellowteebck from "../assets/AlabayMerch/yellow tee bck.png";
const Merchandise = () => {
  return (
    <div className="merch">
      <h1 className="vis-heading mb-16">MERCHANDISE</h1>
      <Swiper 
        navigation={true} 
        modules={[Navigation,Autoplay]} 
        loop={true}
        autoplay={{
          delay: 3000,  // Time between each slide in milliseconds
          disableOnInteraction: false, // Keep autoplay after user interactions
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={bluecapbck} alt="" />
            <img className="front-image" src={bluecap} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={pinkteebck} alt="" />
            <img className="front-image" src={pinktee} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={yellowteebck} alt="" />
            <img className="front-image" src={yellowtee} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="merchandise">
            <img className="background-image" src={blackhoodiebck} alt="" />
            <img className="front-image" src={blackhoodie} alt="" />
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Merchandise;
