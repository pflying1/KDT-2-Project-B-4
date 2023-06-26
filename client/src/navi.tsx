import React from 'react';
import homeLogo from './home.png';
import settingLogo from './settings.png';
import markLogo from './bookmark.png';
import './styles.css'

const navi: React.FC = () => {

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

export default navi