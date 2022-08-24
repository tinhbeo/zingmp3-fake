import ZingChart from 'components/ZingChart';
import Header from 'components/Header';
import Scrollbar from 'components/Scrollbar';
import Sidebar from 'components/Sidebar';
import Home from 'pages/Home';
import { useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
function App() {
  const contentElement = useRef(null)
  const [heightContent, setHeightContent] = useState(null)
  const [scrollTopPxl, setScrollTopPxl] = useState(0)
  useEffect(() => {
    setHeightContent(contentElement.current.scrollHeight)
  }, [])
  const handleScroll = () => {
    setScrollTopPxl(contentElement.current.scrollTop)
  }
  return (
    <div className="bg-layout-bg text-white flex font-inter text-sm h-screen">
      <Sidebar />
      <Header />
      <div className="flex-grow overflow-hidden relative">
        <div className='absolute inset-0 overflow-y-scroll px-14 no-scrollbar' onScroll={handleScroll} ref={contentElement}>
          <div className="mt-[70px]" >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chart" element={<ZingChart />} />
            </Routes>
          </div>
        </div>
        <Scrollbar fullHeight={heightContent} scrollTopPxl={scrollTopPxl} />
      </div>
      {/* <div className="w-[200px] flex-shrink-0">abc</div> */}
    </div>
  );
}

export default App;
