import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import Map from './component/service/kakaoMap'
import Kakaomap from './component/view/kakaomap'

import MenuBar from './component/view/menuBar'
import IntroPage from "./component/view/introPageScreen";
import Nav from './component/view/nav';
import Header from "./component/view/header";

const apiKey = process.env.KAKAO_MAP;
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
        <Header />
      <Kakaomap />
        <div className='containerBody'>
          <Routes>
          <Route path="/map" element={apiKey ? <Map apiKey={apiKey}/> : null} />
          </Routes>
        </div>
        {[
          "/"
        ].includes(location.pathname) ? null : (
          <Nav />
        )}

      </div>
    </div>

  );
}

export default App;


