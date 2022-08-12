import SliderHome from 'pages/Home/components/SliderHome';
import { VscChevronRight } from 'react-icons/vsc';

import { NavLink } from 'react-router-dom';
import MusicCard from './components/MusicCard';
const Home = () => {
  return (
    <div className="h-screen">
      <SliderHome />

      <div className="mt-[30px]">
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
          <div className="w-1/6 overflow-hidden max-w-[170px] max-h-[170px] min-w-[150px] min-h-[150px]">
            <MusicCard />
          </div>
          <div className="w-1/6 overflow-hidden max-w-[170px] max-h-[170px] min-w-[150px] min-h-[150px]">
            <MusicCard />
          </div>
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="mb-4 font-bold text-xl capitalize">Có thể bạn muốn nghe</h3>
        <div className="flex">
          <div className="w-1/5 overflow-hidden min-w-[150px]">
            <MusicCard />
          </div>
        </div>
      </div>

      <div className="mt-[30px]">
        <h3 className="mb-4 font-bold text-xl capitalize">Mới phát hành</h3>
        <div>
          <button className="py-1 px-6 rounded-full bg-purple-primary text-white uppercase border border-purple-primary text-xs mr-4">
            Bài hát
          </button>

          <button className="py-1 px-6 rounded-full bg-transparent text-white uppercase text-xs border border-border-alpha">
            ALBUM
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
