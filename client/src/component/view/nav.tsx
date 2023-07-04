import React from "react";
import { Link } from "react-router-dom";
import homeLogo from './image/home.png';
import settingLogo from './image/settings.png';
import markLogo from './image/bookmark.png';
import './css/menuBarStyles.css'
export default function Navigation() {
  return (
    <div className='containerFoot'>
      <div className='naviBox'>
        <div className='naviImage'>
          <Link to="/bookMake">
            <img src={markLogo} alt="homeLogo" />
          </Link>
        </div>
        <div className='naviImage'>
          <Link to="/main">
            <img src={homeLogo} alt="homeLogo" />
          </Link>
        </div>
        <div className='naviImage'>
          <Link to="/account">
            <img src={settingLogo} alt="homeLogo" />
          </Link>
        </div>
      </div>
    </div>
  );
}
