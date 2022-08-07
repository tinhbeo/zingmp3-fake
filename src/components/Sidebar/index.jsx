import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdOutlineLibraryMusic } from 'react-icons/md';
import { BsCircle } from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';
import { IoRadioOutline } from 'react-icons/io5';
const Sidebar = () => {
    return (
        <div
            className="pl-7 pr-[25px] w-[240px] text-primary-text relative 
        before:absolute before:w-full before:h-full before:left-0 before:bg-[hsla(0,0%,100%,0.05)] 
        before:z-50 before:pointer-events-none"
        >
            <div className="h-[70px] flex items-center">
                <div
                    className="bg-contain bg-no-repeat w-[120px] h-[40px] cursor-pointer"
                    style={{
                        backgroundImage: `url("https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg")`,
                    }}
                ></div>
            </div>
            <nav className="mb-4">
                <ul>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <MdOutlineLibraryMusic width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Cá Nhân</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <BsCircle width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Khám Phá</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <AiOutlineLineChart width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">#zingchart</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <IoRadioOutline width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Radio</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <IoRadioOutline width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Theo dõi</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <hr />
            <nav className="mb-4 mt-2">
                <ul>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <MdOutlineLibraryMusic width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Nhạc Mới</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <BsCircle width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Thể Loại</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <AiOutlineLineChart width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">Top 100</span>
                        </NavLink>
                    </li>
                    <li className="py-2 hover:text-white">
                        <NavLink to="#" className="flex items-center">
                            <IoRadioOutline width="24px" height="24px" className="text-2xl mr-2" />
                            <span className="text-[13px] font-bold">MV</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="bg-purple-primary rounded-lg p-3 font-semibold text-white text-xs text-center my-3">
                <p className="mb-2 leading-normal">Đăng nhập để khám phá playlist dành riêng cho bạn</p>
                <button className="uppercase border py-[6px] px-[35px] rounded-full hover:brightness-90">
                    Đăng nhập
                </button>
            </div>

            <div
                className="rounded-lg p-3 font-semibold text-white text-xs text-center"
                style={{ backgroundImage: 'linear-gradient(117deg,#5a4be7,#c86dd7 102%)' }}
            >
                <p className="mb-2 leading-normal">Nghe nhạc không quảng cáo cùng kho nhạc VIP</p>
                <button className="bg-[#ffdb00] border-[#ffdb00] text-[#32323D] uppercase border py-[6px] px-[35px] rounded-full hover:brightness-90">
                    nâng cấp vip
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
