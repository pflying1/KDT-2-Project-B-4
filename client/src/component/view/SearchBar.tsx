import React from 'react';
// import ReactDOM from 'react-dom';
import menuBox from './image/menu.png';
import searchBox from './image/search.png';
import "./css/SearchBarStyle.css";

const SearchBar = () => {
  return (
    <div className="mainCss">
      <div className="searchContainerCss">
        <img src={menuBox} alt='menu' className="menuCss" />
        <input className="searchInputCss" placeholder='정류소 검색' />
        <button className="searchContainerTextCss">
          <div>검색</div>
          <img src={searchBox} alt="search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
