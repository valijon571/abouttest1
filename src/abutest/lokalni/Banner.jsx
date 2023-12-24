import React from "react";
import { AboutStyle } from "../AboutStyle";
// import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation } from "swiper/modules";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "swiper/css";
// import "swiper/css/pagination";

const Banner = () => {
  // let settings = {
  //   dots: true,
  //   centerMode: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   spaceBetween: 30,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  // };
  return (
    <>
      <AboutStyle>
        {/* <div className="container">
        <div class="banner">
          <h2>Banner</h2>
          <div className="carusel">
            <Slider {...settings}>
              <div>
                <img
                  src="../img/rectangle4.png"
                  // alt="Los Angeles"
                  // class="d-block"
                  // style="width:100%"
                />
              </div>
              <div>
                <img
                  src="https://nasvyazi.uz/api//storage/images/October2023/HdyZMPZZ47v2j57cxkNR.jpg"
                  // alt="Los Angeles"
                  // class="d-block"
                  // style="width:100%"
                />
              </div>
              <div>
                <img
                  src="https://nasvyazi.uz/api//storage/images/October2023/fSND1dM97XfdGUs7adoU.jpg"
                  // alt="Los Angeles"
                  // class="d-block"
                  // style="width:100%"
                />
              </div>
            </Slider>
          </div>
        </div>
        </div> */}
        <div class="swiper" lazy="true">
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
        </div>
      </AboutStyle>
    </>
  );
};
export default Banner;
