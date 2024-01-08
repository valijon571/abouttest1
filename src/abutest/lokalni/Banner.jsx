// import React from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutStyle } from "../AboutStyle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <AboutStyle>
        {/* <div className="container"> */}
        <h5>Banner</h5>
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://btest.gazon-tashkent.uz/media/banner/image_2023-11-02_15-26-32.png"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://btest.gazon-tashkent.uz/media/banner/photo_2023-10-04_13-37-39.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://btest.gazon-tashkent.uz/media/banner/photo_2023-11-03_20-45-54.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://btest.gazon-tashkent.uz/media/banner/LOADING_v1_03.jpg"
              alt=""
              loading="lazy"
            />
          </SwiperSlide>
        </Swiper>
        {/* </div> */}
      </AboutStyle>
    </>
  );
};
export default Banner;
