import React from "react";
import BookmarkImg from "../images/bookmark.png"

const FavoritesList = () => {
  const titleAndImgCss = {
    display : "flex",
    justifyContent: "space-evenly"
  }
  const cityHallCss = {
    color: "gray"
  }
  return(
    <div>
      <div style={titleAndImgCss}>
        <h3>을지대학병원</h3>
        <div style={cityHallCss}>대전 시청 방면</div>
        <img src={BookmarkImg} alt=""></img>
      </div>
      <div>
        <div>
          <div>
            <div style={{width : "40px", color : "white", background : "#00900"}}>지선</div>
            <div></div>
          </div>  
          <div></div>
        </div>

        <div></div>
        <div></div>
      </div>
    </div>
  )
}
export default FavoritesList