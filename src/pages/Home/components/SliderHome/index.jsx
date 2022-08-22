import React from "react";
import { images } from "static/data";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonSlideNext from "../ButtonSlideNext";
import ButtonSlidePrev from "../ButtonSlidePrev";

import "swiper/css";
import "swiper/css/navigation";

const SliderHome = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <Swiper
      className="group"
      modules={[Navigation]}
      spaceBetween={20}
      loop={true}
      slidesPerView={3}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            className="w-full rounded-md h-44 object-cover"
            src={image}
            loading="lazy"
            alt="slide-img"
          />
        </SwiperSlide>
      ))}
      <ButtonSlidePrev iref={navigationPrevRef} />
      <ButtonSlideNext iref={navigationNextRef} />
    </Swiper>
  );
};

export default SliderHome;
