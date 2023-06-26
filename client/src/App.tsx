import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateFrom from './createFrom'
import MapComponent from './kakaomap';
function App() {
  return (
    <div className="App">
      <CreateFrom />
      <MapComponent />
    </div>
  );
}

export default App;
