// import React from "react";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AboutStyle } from "../AboutStyle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
import { Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <AboutStyle>
        <div className="container">
          <h5>Banner</h5>
          <Swiper
            slidesPerView={3}
            spaceBetween={15}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
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
        </div>

        {/* ====================================== */}
        {/* <div class="swiper" lazy="true">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              // style="width: 401.6px; margin-right: 50px;"
              data-swiper-slide-index="0"
            >
              <div class="img_slide">
                <a href="/banner/adsfsev-gdrg-er">
                  <img
                    src="https://btest.gazon-tashkent.uz/media/banner/image_2023-11-02_15-26-32.png"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              class="swiper-slide"
              // style="width: 401.6px; margin-right: 50px;"
              data-swiper-slide-index="1"
            >
              <div class="img_slide">
                <a href="/banner/sdsvh-fg-f">
                  <img
                    src="https://btest.gazon-tashkent.uz/media/banner/photo_2023-10-04_13-37-39.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              class="swiper-slide"
              // style="width: 401.6px; margin-right: 50px;"
              data-swiper-slide-index="2"
            >
              <div class="img_slide">
                <a href="/banner/asdads-asd-asdasd">
                  <img
                    src="https://btest.gazon-tashkent.uz/media/banner/photo_2023-11-03_20-45-54.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <div
              class="swiper-slide"
              // style="width: 401.6px; margin-right: 50px;"
              data-swiper-slide-index="3"
            >
              <div class="img_slide">
                <a href="/banner/werfwerf">
                  <img
                    src="https://btest.gazon-tashkent.uz/media/banner/LOADING_v1_03.jpg"
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div> */}
      </AboutStyle>
    </>
  );
};
export default Banner;
