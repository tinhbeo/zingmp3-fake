import { useEffect, useRef } from "react";
import "./style.css";
const Scrollbar = ({ fullHeight, scrollTopPxl }) => {
  const scrollbar = useRef(null);

  useEffect(() => {
    const viewHeight = window.innerHeight;
    scrollbar.current.style.height =
      Math.floor((viewHeight / fullHeight) * 100) + "%";

    scrollbar.current.style.transform = `translateY(${scrollTopPxl}px)`;
  }, [fullHeight, scrollTopPxl]);

  return (
    <div className="w-1 absolute right-[2px] top-[2px] bottom-[2px] z-50">
      <div
        className="relative w-full bg-scrollbar rounded-sm"
        // style={{ height: height }}
        ref={scrollbar}
      ></div>
    </div>
  );
};

export default Scrollbar;
