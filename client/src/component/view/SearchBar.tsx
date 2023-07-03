import React, { useState, ChangeEvent, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import menuBox from './image/menu.png';
import searchBox from './image/search.png';
import "./css/SearchBarStyle.css";
import data from '../../data.json'

console.log(data[1])

const SearchBar = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');

  // const onChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value;
  //   if (value === '') {
  //     setInputValue(value);
  //     setResult('');
  //     setIsHidden(true);
  //   }
  //   else if (obj.name.includes(value)) {
  //     setInputValue(value);
  //     setResult(obj.age);
  //     setIsHidden(false)
  //   } else {
  //     setInputValue(value);
  //     setResult('');
  //     setIsHidden(true)

  //   }
  // };

  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('../../data.json');
  //       const jsonData = await response.json();
  //       setData(jsonData);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);






  // if (!data) {
  //   return <div>Loading...!!!!!</div>;
  // }


  // const readAndParseJsonFile = (filePath: string): Promise<any> => {
  //   return new Promise((resolve, reject) => {
  //     fs.readFile( '../../data.json', 'utf8', (err, data) => {
  //       if (err) {
  //         reject(err);
  //       } else {
  //         try {
  //           const parsedData = JSON.parse(data);
  //           resolve(parsedData);
  //         } catch (parseError) {
  //           reject(parseError);
  //         }
  //       }
  //     });
  //   });
  // };
  // console.log(readAndParseJsonFile)

  return (

    <div className="mainCss">
      <div className="searchContainerCss">
        <img src={menuBox} alt='menu' className="menuCss" />
        <input className="searchInputCss" placeholder='정류소 검색'
          // onChange={onChange}
          type='text' value={inputValue} />

        <button className="searchContainerTextCss" >
          <div>검색</div>
          <img src={searchBox} alt="search" />
        </button>
      </div>
      <div className={isHidden ? "hiddenSearchListCss hidden" : "hiddenSearchListCss"}>
        <p>현재 입력값: {inputValue}</p>
        <p>결과: {result}</p>
      </div>
    </div>
  );
}

export default SearchBar;
