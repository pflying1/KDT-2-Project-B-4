import React, { useState } from 'react';
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

interface BusModalProps {
  busStopName: string;
  busStopNumber: string;
}

const BusModal: React.FC<BusModalProps> = ({ busStopName, busStopNumber }) => {
  const userID = localStorage.getItem('userID');
  console.log("모달에서 받은 값: ", busStopName, busStopNumber)
  console.log("모달에서 유저값 ", userID)

  // 나머지 내용 생략

  return (
    <div className="busModalWin">
      {/* 나머지 내용 생략 */}
    </div>
  );
};

export default BusModal;