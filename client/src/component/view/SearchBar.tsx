import React, { useState, ChangeEvent } from 'react';
// import ReactDOM from 'react-dom';
import menuBox from './image/menu.png';
import searchBox from './image/search.png';
import "./css/SearchBarStyle.css";
import axios from 'axios'


const SearchBar = () => {
  const [message, setMessage] = useState<string>('');
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (obj.name === value) {
      setInputValue(value);
      setResult(obj.age);
    } else {
      setInputValue(value);
      setResult('');
    }
  };

  const obj = {
    name: '예준',
    age: '25',
  };



  console.log(onChange);
  return (

    <div className="mainCss">
      <div className="searchContainerCss">
        <img src={menuBox} alt='menu' className="menuCss" />
        <input className="searchInputCss" placeholder='정류소 검색' onChange={onChange} type='text' value={inputValue} />

        <button className="searchContainerTextCss" >
          <div>검색</div>
          <img src={searchBox} alt="search" />
        </button>
      </div>
      <div>
        <p>현재 입력값: {inputValue}</p>
        <p>결과: {result}</p>
      </div>
    </div>
  );
}

export default SearchBar;
