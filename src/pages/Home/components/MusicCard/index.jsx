import Tippy from "@tippyjs/react";

import { BsPlayFill } from "react-icons/bs";
import { FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { NavLink } from "react-router-dom";
const MusicCard = ({ content }) => {
  return (
    <>
      <div className="relative group cursor-pointer rounded-md overflow-hidden mb-2">
        <img
          className="group-hover:scale-110 ease-in-out duration-300"
          src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg"
          alt=""
        />
        <div className="group-hover:flex hidden gap-2 items-center justify-center absolute top-0 inset-0 before:absolute before:inset-0 before:bg-dark-alpha">
          <Tippy content="Thêm vào thư viện">
            <button className="hover:bg-hover-icon p-1 rounded-full z-10">
              <FiHeart className="text-xl" />
            </button>
          </Tippy>
          <div className="p-1 border border-white border-solid rounded-full z-10">
            <BsPlayFill className="text-4xl" />
          </div>
          <Tippy content="Khác">
            <button className="hover:bg-hover-icon p-1 rounded-full z-10">
              <FiMoreHorizontal className="text-xl" />
            </button>
          </Tippy>
        </div>
      </div>
      {content && (
        <div>
          <NavLink
            to="#"
            href="./"
            className="font-bold hover:text-text-hover capitalize"
          >
            Remix việt hay nhất
          </NavLink>
          <p className="text-text-gray">
            <NavLink to="#" className="hover:text-text-hover">
              Jack-J97,
            </NavLink>
          </p>
        </div>
      )}
    </>
  );
};

export default MusicCard;
