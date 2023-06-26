import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css'


const BusChild: React.FC = () => {
  return <div className="busInfoWrap" />;
};

const busModal: React.FC = () => {

  return (
    <div className='busModalWin'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      {[...Array(5)].map((_, index) => (
        <BusChild key={index} />
      ))}
    </div>
  )
}

export default busModal