import React from "react";
import Tippy from "@tippyjs/react";
import { FiMoreHorizontal } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { BsPlayFill } from "react-icons/bs";
const Media = ({ vip }) => {
  return (
    <div className="flex items-center justify-between p-[10px] w-full max-w-xs select-none group rounded overflow-hidden relative">
      <div className="flex">
        <figure className=" mr-[10px] flex-shrink-0 rounded-sm overflow-hidden cursor-pointer relative">
          <img
            className="w-[60px] h-[60px] "
            src="https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/b/c/c/6/bcc66cda8f0c4608a7350eb69bfd19b6.jpg"
            alt=""
          />
          <BsPlayFill className="absolute text-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden group-hover:block" />
        </figure>
        <div className="flex-grow">
          <div className="flex items-center">
            <h5 className="font-bold line-clamp-1">Tim vỡ</h5>
            {vip && (
              <span className="ml-2 rounded-sm w-[26px] h-3 bg-vip"></span>
            )}
          </div>

          <p className="my-1 text-xs text-text-gray line-clamp-1">
            <NavLink to="#" className="hover:text-text-hover">
              Dế Choắt
            </NavLink>
            {", "}
            <NavLink to="#" className="hover:text-text-hover">
              Uyên Pím
            </NavLink>
          </p>
          <p className="text-xs text-text-gray">2 ngày trước</p>
        </div>
      </div>
      <Tippy content="Khác">
        <div className="text-base w-9 h-9 items-center justify-center flex-shrink-0 rounded-full hover:bg-hover-icon cursor-pointer hidden group-hover:flex">
          <FiMoreHorizontal />
        </div>
      </Tippy>

      <div className="absolute w-full h-full bg-alpha-bg left-0 pointer-events-none hidden group-hover:block"></div>
    </div>
  );
};

export default Media;
