import React from 'react';
import { useSwiper } from 'swiper/react';

import { HiOutlineChevronLeft } from 'react-icons/hi';
const ButtonSlidePrev = ({ iref }) => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slidePrev()}
      ref={iref}
      className=".slide-button-next absolute w-[55px] h-[55px] text-3xl z-10 rounded-full cursor-pointer text-white top-1/2 -translate-y-1/2 left-6 
  group-hover:flex items-center justify-center hover:bg-hover-icon select-none hidden"
    >
      <HiOutlineChevronLeft />
    </div>
  );
};

export default ButtonSlidePrev;
