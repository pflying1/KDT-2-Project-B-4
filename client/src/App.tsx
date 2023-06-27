import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateFrom from './component/view/createFrom'
import Map from './component/service/kakaoMap'
import MenuBar from './component/view/menuBar'
import BusModalWin from './component/view/busStopModal';

function App() {
  return (
    <div className="App">
      {/* <CreateFrom /> */}
      <div className='container'>
        <div className='containerHead'>
        </div>
        <div className='containerBody'>
          <Map />
          <BusModalWin />
        </div>
        <div className='containerFoot'>
          <MenuBar />
        </div>
      </div>
    </div>
    
  );
}

export default App;
