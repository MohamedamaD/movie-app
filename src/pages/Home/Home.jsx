import React from "react";
import { HeroSlide } from "../../components";
import { images } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export const Home = () => {
  return (
    <div id="__home">
      <div className="__hero">
              <Swiper
               

                  navigation={{el: '.'}}
                  modules={[Navigation]}>
          <SwiperSlide>
            <HeroSlide bg={images.LOGIN_BACKGROUND} />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide bg={images.LOGIN_BACKGROUND} />
          </SwiperSlide>
          <SwiperSlide>
            <HeroSlide bg={images.LOGIN_BACKGROUND} />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container __home__container"></div>
    </div>
  );
};
