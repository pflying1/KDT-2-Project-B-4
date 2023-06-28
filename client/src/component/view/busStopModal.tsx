import React from 'react';
import ReactDOM from 'react-dom';
import './css/busStopModalStyles.css';
import mark from './image/bookmarknull.png'


//-------------------------------------
const cnt = 10; //버스 개수
let busStopName = '을지대학병원'; //정류장 이름
let busStopNumber = '12356' //정류장 번호
let busWay = '대전시청방면' //버스 방면
let busNumber = '203'
let busDiv = '지선'
let busTime = '6'
let busStopCount = '4'
//-------------------------------------


interface BusChildProps {
  number: string;
  div: string;
  time: string;
  count: string;
}

const BusChild: React.FC<BusChildProps> = ({ number, div, time, count }) => {
  let colorVal;
  let timeVal;

  if (div === '지선') {
    colorVal = 'green';
  } else if (div === '간선') {
    colorVal = 'blue';
  } else {
    colorVal = 'red';
  }

  if (time === '잠시후 도착') {
    timeVal = 'red';
  } else if (parseInt(time) <= 5) {
    timeVal = 'orange';
  } else {
    timeVal = 'black';
  }

  return (
    <div className="busInfo">
      <div className='busDiv' style={{ backgroundColor: colorVal }}>{div}</div>
      <div className='busNumber'>{number}</div>
      <div style={{ color: timeVal }}>{time}분 ({count}정거장 전)</div>
    </div>
  );
};

const busModal: React.FC = () => {
  return (
    <div className="busModalWin">
      <div className="titleWrap">
        <div className="titleArea">
          <p className="title">{busStopName}</p>
          <img src={mark} alt="markNull" />
        </div>
        <div className="titleArea">
          <p className="busText">{busStopNumber}</p>
          <p className="busText">{busWay}</p>
        </div>
      </div>
      <div className="divLine"></div>
      <div className="busInfoWrap">
        <p className="busTitleWrap">실시간 버스 정보</p>
        <div className="listScroll">
          {[...Array(cnt)].map((_, index) => (
            <BusChild
              key={index}
              number={busNumber}
              div={busDiv}
              time={busTime}
              count={busStopCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default busModal