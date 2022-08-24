import React from "react";
import { NavLink } from "react-router-dom";

const MediaRanking = () => {
  return (
    <div className="bg-[#2f2739] w-full flex p-[15px]">
      <figure className="mr-[10px]">
        <img
          src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/e/7/7/2/e772358978fef8a02eefd34f6a4ca6f3.jpg"
          alt=""
        />
      </figure>
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-base font-bold capitalize">waiting for you</p>
          <p className="text-xs mt-[3px] text-[#ffffff80]">
            <NavLink to="#">
              <span className="hover:text-text-hover hover:underline">
                MONO
              </span>
            </NavLink>
            {", "}
            <NavLink to="#">
              <span className="hover:text-text-hover hover:underline">
                Onion
              </span>
            </NavLink>
          </p>
        </div>
        <div>
          <span>#1</span>
          <span>24.08.2022</span>
        </div>
      </div>
    </div>
  );
};

export default MediaRanking;
