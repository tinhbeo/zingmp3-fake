import React from 'react';
import { useSwiper } from 'swiper/react';

import { HiOutlineChevronRight } from 'react-icons/hi';
const ButtonSlideNext = ({ iref }) => {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => swiper.slideNext()}
      ref={iref}
      className="absolute w-[55px] h-[55px] text-3xl z-10 rounded-full cursor-pointer text-white top-1/2 -translate-y-1/2 right-6 
  group-hover:flex items-center justify-center hover:bg-hover-icon hidden select-none"
    >
      <HiOutlineChevronRight />
    </div>
  );
};

export default ButtonSlideNext;
