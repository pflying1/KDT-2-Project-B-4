import React, { useState } from "react";
import './css/setViewStyle.css'
import MenuBar from "./menuBar"

// 설정 페이지 구축
const SetView: React.FC = () => {
  const mainHeader = ['지도 설정', '앱 설정']
  const mainMainOne = ['안', '녕', '하', '세', '요'];
  const mainMainTwo = ['이', '경', '택', '이', '요'];

  return (
    // <div className="root">
      <div className='main'>
        <div className="mainHeader">{mainHeader[0]}</div>
        <div className='mainWrap'>
          {mainMainOne.map((item, index) => (
            <div className="mainSet" key={index}>
              <div className="mainMain">{item}</div>
              <div className="mainButton">
                <ToggleButton />
              </div>
            </div>
          ))}
        </div>
        <div className="mainHeader">{mainHeader[1]}</div>
        <div className="mainWrap">
          {mainMainTwo.map((item, index) => (
            <div className="mainSet" key={index}>
              <div className="mainMain">{item}</div>
              <div className="mainButton">
                <ToggleButton />
              </div>
            </div>
          ))}
        </div>
      </div>
    // </div>
  )
}

// 토글 버튼 함수
const ToggleButton: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  return (
    <button onClick={handleClick}>
      {isToggled ? "ON" : "OFF"}
    </button>
  );
};

export default SetView;
