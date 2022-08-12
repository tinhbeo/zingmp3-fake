import { Routes, Route } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Home from 'pages/Home';
import Header from 'components/Header';
function App() {
  return (
    <div className="bg-layout-bg text-white flex font-inter text-sm h-screen">
      <Sidebar />

      <div className="flex-1 px-14 overflow-y-auto">
        <Header />
        <div className="mt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>

      {/* <div className="w-[200px]">abc</div> */}
    </div>
  );
}

export default App;
