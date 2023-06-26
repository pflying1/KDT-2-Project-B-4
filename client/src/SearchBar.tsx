import React from 'react'
import { CSSProperties } from 'react';
import menuBox from './img/menu.png';
import searchBox from './img/search.png';

const SearchBar = () => {
  const mainCss: CSSProperties = {
    marginLeft:"15%",
    marginTop: "5%",
    position:"fixed"
  } 
  const searchContainerCss: CSSProperties = {
    display:"flex",
    flexDirection:"row",
    width: "290px",
    height: "38px",
    borderRadius : "20px",
    border: "1px solid black",
  }

  const menuCss : CSSProperties = {
    marginLeft: "5%",
    marginTop:"1%",
  }
  const searchInputCss: CSSProperties = {
    border : "1px solid white",
    width: "150px",
    height: "34px",
  } 
  const searchContainerTextCss: CSSProperties = {
    display: "flex",
    color: 'white',
    alignItems: 'center',
    background: '#EF7F00',
    width:"100px",
    borderRadius : "20px",
  }
  const searchTextCss: CSSProperties = {
    marginLeft: "10px",
    marginRight: "15px"
  }
  return (
    <div style={mainCss}>
      <div style={searchContainerCss}>
        <img src={menuBox} alt='menu' style={menuCss}></img>
        <input style={searchInputCss} placeholder='정류소 검색'></input>
        <button style={searchContainerTextCss}>
          <div style={searchTextCss}>검색</div>
          <img src={searchBox} alt="search"></img>
        </button>
      </div>
    </div>
  )
}

export default SearchBar;