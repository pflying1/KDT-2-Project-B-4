import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Map from './component/service/kakaoMap'
import MenuBar from './component/view/menuBar'
import BusModalWin from './component/view/busStopModal';
import SearchBar from "./component/view/SearchBar";
import IntroPage from "./component/view/introPageScreen";
import Nav from './component/view/nav';
import Header from "./component/view/header";
import FavoritesListAll from "./component/view/FavoritesListAll";
import SocketApp from "./component/view/socketC";
import BusLocationData from "./component/service/busLocation";
function App() {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState("");


  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setPageTitle("");
        break;
      case "/main":
        setPageTitle("홈");
        break;
      case "/bookMake":
        setPageTitle("내 정보");
        break;
      default:
        setPageTitle("홈");
        break;
    }
  }, [location.pathname]);

  return (

    <div className="App">
      <div className='container'>
        {location.pathname === "/" ? (
          <IntroPage />
        ) : location.pathname === "/main" ? (
          <>
          <SearchBar />
          <Map />
          <MenuBar />
          </>
        ) : (
          <>
          <Header />
          <div className='containerBody'>
            <Routes>      
              <Route path="/chat" element={<SocketApp />} />
            </Routes>
            <Routes>          
              <Route path="/favorite" element={<FavoritesListAll/>} />
            </Routes>
          </div>
          <Nav />
          </>
        )}
        
        

      </div>
    </div>

  );
}

export default App;


