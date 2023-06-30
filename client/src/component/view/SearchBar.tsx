import React from 'react';
// import ReactDOM from 'react-dom';
import menuBox from './image/menu.png';
import searchBox from './image/search.png';
import "./css/SearchBarStyle.css";
import axios from 'axios'

const handleSearch = async (): Promise<void> => {
  const inputValue: string = (document.querySelector('.searchInputCss') as HTMLInputElement).value;

  try {
    const response = await axios.get('http://localhost:3000/search/', {
      params: {
        input: inputValue,
      },
    });
    const data = response.data;
    // 일치하는 값을 처리하거나 상태를 업데이트합니다.
  } catch (error) {
    // 에러 처리
  }
};

const SearchBar = () => {
  return (
    <div className="mainCss">
      <div className="searchContainerCss">
        <img src={menuBox} alt='menu' className="menuCss" />
        <input className="searchInputCss" placeholder='정류소 검색' />
        <button className="searchContainerTextCss" onClick={handleSearch} type='submit'>
          <div>검색</div>
          <img src={searchBox} alt="search" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
