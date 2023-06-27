import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateFrom from './component/view/createFrom'
import MenuBar from './component/view/menuBar'

function App() {
  return (
    <div className="App">
      {/* <CreateFrom /> */}
      <div className='container'>
        <div className='containerHead'>

        </div>
        <div className='containerBody'>
          
        </div>
        <div className='containerFoot'>
          <MenuBar />
        </div>
      </div>
    </div>
    
  );
}

export default App;
