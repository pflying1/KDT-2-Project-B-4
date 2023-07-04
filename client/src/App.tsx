import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Map from './component/service/kakaoMap'
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
      <Routes>
        <Route path="/" element={<IntroPage />} />
      </Routes>
      <Routes>
        <Route path="/main" element={<Map />} />
      </Routes>
      <Routes>      
        <Route path="/chat" element={<SocketApp />} />
      </Routes>
      <Routes>          
        <Route path="/favorite" element={<FavoritesListAll/>} />
        {/* <Route path="/buslocation" element={<BusLocationData/>} /> */}
      </Routes>
      {[
        "/"
      ].includes(location.pathname) ? null : (
        <>
        <Nav />
        <Header />
        </>
      )}

    </div>
  </div>

  );
}

export default App;


