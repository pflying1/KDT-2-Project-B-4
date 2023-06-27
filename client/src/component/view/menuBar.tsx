import React from 'react';
import homeLogo from './image/home.png';
import settingLogo from './image/settings.png';
import markLogo from './image/bookmark.png';
import './css/menuBarStyles.css'

const menuBar: React.FC = () => {

  return (
    <div className='naviBox'>
      <div className='naviImage'>
        <img src={markLogo} alt="homeLogo"/>
      </div>
      <div className='naviImage'>
        <img src={homeLogo} alt="homeLogo"/>
      </div>
      <div className='naviImage'>
        <img src={settingLogo} alt="homeLogo"/>
      </div>
    </div>
  )
}

export default menuBar