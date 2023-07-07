import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import markNull from './image/bookmarknull.png'
import markPull from './image/bookmarkPull.png'
import './css/busStopModalStyles.css';
import axios from 'axios';

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
let mark:string;

interface BusChildProps {
  number: string;
  div: string;
  time: string;
  count: string;
}

interface BusProps {
  busStopName: string;
  busStopNumber: string;
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
      <div style={{ color: timeVal,fontSize: '10pt' }}>{time}분 ({count}정거장 전)</div>
    </div>
  );
};

const BusModal: React.FC<BusProps> = ({busStopName, busStopNumber}) => {
// const BusModal: React.FC = () => {
  const userID = localStorage.getItem('userID');
  console.log("모달에서 받은 값: ", busStopName, busStopNumber)
  console.log("모달에서 유저값 ", userID)

  const [toggle, setToggle] = useState(false);
    useEffect(()=>{
      bookMarkCheck()
    }, [])
  const bookMarkCheck = async () => {
    const userID = localStorage.getItem('userID');
  
    try {
      const response = await axios.post('/favorCheck', {
        busStopID: busStopNumber,
        busStopName: busStopNumber,
        user: userID,
      });
      console.log("데이터 받아왔다ㅏ아ㅏ", response.data);
      if (response.data) {
        mark = markPull;
        setToggle(true)
      }
      else {
        mark = markNull;
        setToggle(false)
      }
    } catch (error) {
      console.error(error);
    }
    
  };

  const handleImageClick = async () => {
    setToggle((prevToggle) => !prevToggle); // 이 부분을 비동기 작업 전에 업데이트합니다.
  
    try {
      const response = await axios.post('/favor', {
        busStopID: busStopNumber,
        busStopName: busStopName, // 이 부분을 수정합니다.
        user: userID,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if(toggle){
    mark = markPull
  }
  else{
    mark = markNull
  }

  return (
    <div className="busModalWin">
      <div className="titleWrap">
        <div className="titleArea">
          <p className="title">{busStopName}</p>
          <img src={mark} alt="bookMark" onClick={handleImageClick} />

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

export default BusModal