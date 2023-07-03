import React, { useState, ChangeEvent } from 'react';
// import ReactDOM from 'react-dom';
import menuBox from './image/menu.png';
import searchBox from './image/search.png';
import "./css/SearchBarStyle.css";


const SearchBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === '') {
      setInputValue(value);
      setResult('');
      setIsHidden(true);
    }
    else if (obj.name.includes(value)) {
      setInputValue(value);
      setResult(obj.age);
      setIsHidden(false)
    } else {
      setInputValue(value);
      setResult('');
      setIsHidden(true)

    }
  };

  const obj = {
    name: '예준',
    age: '25',
  };



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
      <div className={isHidden ? "hiddenSearchListContainerCss hidden" : "hiddenSearchListContainerCss" }>
        <p className='hiddenSearchInnerListCSS'>현재 입력값: {inputValue}</p>
        <p>결과: {result}</p>
      </div>
    </div>
  );
}

export default SearchBar;
