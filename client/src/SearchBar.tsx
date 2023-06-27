import React from 'react'
import { CSSProperties } from 'react';
import menuBox from './img/menu.png';
import searchBox from './img/search.png';

const SearchBar = () => {
  const mainCss: CSSProperties = {
    display : "flex",
    justifyContent: "center"
  } 
  const searchContainerCss: CSSProperties = {
    display:"flex",
    justifyContent: "space-around",
    flexDirection:"row",
    borderRadius : "20px",
    border: "1px solid #EF7F00",
    height: "38px"
  }

  const menuCss : CSSProperties = {
    marginLeft: "5%",
  }
  const searchInputCss: CSSProperties = {
    border : "1px solid white",
    width: "80%",
    height: "34px",
  } 
  const searchContainerTextCss: CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    color: 'white',
    alignItems: 'center',
    background: '#EF7F00',
    width:"100px",
    borderRadius : "20px",
    border : "none"
  }
  return (
    <div style={mainCss}>
      <div style={searchContainerCss}>
        <img src={menuBox} alt='menu' style={menuCss}></img>
        <input style={searchInputCss} placeholder='정류소 검색'></input>
        <button style={searchContainerTextCss}>
          <div>검색</div>
          <img src={searchBox} alt="search"></img>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;