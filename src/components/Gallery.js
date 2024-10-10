import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import the base Swiper styles
import "swiper/css/navigation"; // Import styles for navigation
import "swiper/css/pagination"; // Import styles for pagination
import { Autoplay, Navigation, Pagination } from "swiper/modules"; // Import the modules correctly


// Mock data for photos and videos
const photos = [
  "Photo 1",
  "Photo 2",
  "Photo 3",
  "Photo 4",
  "Photo 5",
  "Photo 6",
];
const videos = [
  "Video 1",
  "Video 2",
  "Video 3",
  "Video 4",
  "Video 5",
  "Video 6",
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  // Get the items to display based on the selected category
  const getItems = () => {
    if (selectedCategory === "PHOTOS") {
      return photos;
    } else if (selectedCategory === "VIDEOS") {
      return videos;
    } else {
      return [...photos, ...videos];
    }
  };

  const items = getItems();

  return (
    <div className="gallery-container">
      <div className="button-group">
        <button
          onClick={() => setSelectedCategory("ALL")}
          className={selectedCategory === "ALL" ? "active" : ""}
        >
          ALL
        </button>
        <button
          onClick={() => setSelectedCategory("PHOTOS")}
          className={selectedCategory === "PHOTOS" ? "active" : ""}
        >
          PHOTOS
        </button>
        <button
          onClick={() => setSelectedCategory("VIDEOS")}
          className={selectedCategory === "VIDEOS" ? "active" : ""}
        >
          VIDEOS
        </button>
      </div>

      {/* Swiper show */}
      <Swiper 
        modules={[Navigation, Pagination, Autoplay]} // Pass modules like this
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,  // Time between each slide in milliseconds
          disableOnInteraction: false, // Keep autoplay after user interactions
        }}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,  // 1 slide per view on small screens
          },
          // when window width is >= 640px
          640: {
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
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slideshow-item flex items-center justify-center my-8 text-black mx-auto">{item}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
