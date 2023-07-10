import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperStyle.css";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  const [bannerImg, setBannerImg] = useState([]);

  //fetch data 
  useEffect(() => {
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=601c03afbeef44e79d118dadd942f3b1"
    )
      .then((res) => res.json())
      .then((data) => setBannerImg(data.results));
  }, []);
  return (
    <div className="w-11/12 mx-auto mt-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* slider image  */}
        {bannerImg.map((bannerItem) => (
          <SwiperSlide>
            <img
              className="w-full h-[300px] lg:h-[600px] object-cover rounded-2xl"
              src={bannerItem?.image}
              alt="foodItem"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
