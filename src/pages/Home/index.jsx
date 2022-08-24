import React from "react";
import SliderHome from "pages/Home/components/SliderHome";
import { VscChevronRight } from "react-icons/vsc";

import { NavLink } from "react-router-dom";
import Media from "./components/Media";
import MusicCard from "./components/MusicCard";
import FavoriteArtist from "./components/FavoriteArtist";
import { favoriteArtists } from "static/data.js";
import SlideArtis from "./components/SlideArtis";
import MediaRanking from "./components/MediaRanking";
const Home = () => {
  return (
    <>
      <div className="py-8">
        <SliderHome />
      </div>

      <section>
        <h3 className="flex justify-between items-center mb-4 font-bold text-xl capitalize">
          Gần đây
          <NavLink
            to="#"
            href="./"
            className="flex items-center text-xs uppercase text-text-gray font-medium hover:text-text-hover"
          >
            tất cả
            <VscChevronRight className="text-base ml-[6px]" />
          </NavLink>
        </h3>
        <div className="flex gap-7">
          <div className="overflow-hidden w-[150px]">
            <MusicCard />
          </div>
          <div className="overflow-hidden w-[150px]">
            <MusicCard />
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 font-bold text-xl capitalize">
          Có thể bạn muốn nghe
        </h3>
        <div className="flex">
          <div className="w-1/5 overflow-hidden">
            <MusicCard content={true} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="mb-4 font-bold text-xl capitalize">Mới phát hành</h3>
        <div className="mb-[30px] flex items-center justify-between">
          <div>
            <button className="py-1 px-6 rounded-full bg-purple-primary text-white uppercase border border-purple-primary text-xs mr-4">
              Bài hát
            </button>

            <button className="py-1 px-6 rounded-full bg-transparent text-white uppercase text-xs border border-border-alpha">
              ALBUM
            </button>
          </div>
          <NavLink
            to="#"
            href="./"
            className="flex items-center text-xs uppercase text-text-gray font-medium hover:text-text-hover"
          >
            tất cả
            <VscChevronRight className="text-base ml-[6px]" />
          </NavLink>
        </div>

        <div className="flex gap-5">
          <div className="w-1/3">
            <Media vip={true} />
            <Media />
            <Media vip={true} />
          </div>
          <div className="w-1/3">
            <Media />
            <Media vip={true} />
            <Media />
          </div>
          <div className="w-1/3">
            <Media />
            <Media vip={true} />
            <Media vip={true} />
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold capitalize mb-4">nghệ sĩ yêu thích</h3>
        <div className="flex gap-7">
          {favoriteArtists.map((favoriteArtist, index) => (
            <div key={index} className="w-1/5">
              <FavoriteArtist
                name={favoriteArtist.name}
                avatar={favoriteArtist.avatar}
                images={favoriteArtist.images}
              />
            </div>
          ))}
        </div>
      </section>

      <section>
        <SlideArtis />
      </section>

      <section>
        <h3 className="flex justify-between items-center mb-4 font-bold text-xl capitalize">
          Nhạc mới
          <NavLink
            to="#"
            href="./"
            className="flex items-center text-xs uppercase text-text-gray font-medium hover:text-text-hover"
          >
            tất cả
            <VscChevronRight className="text-base ml-[6px]" />
          </NavLink>
        </h3>
        <div>
          <div className="w-1/3">
            <MediaRanking />
          </div>
        </div>
      </section>
    </>
  );
};

export default React.memo(Home);
