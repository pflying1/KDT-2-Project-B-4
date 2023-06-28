import React from "react";
import BookmarkImg from "./image/bookmark2.png"
import "./css/FavoritesList3Style.css"

const FavoritesList = () => {
  return(
    <div className="mainCss">
      <div className="titleAndImgCss">
        <div className="titleTextImgCss">
          <h3>을지대학병원</h3>
          <div className="cityHallCss">대전 시청 방면</div>
        </div>
        <img src={BookmarkImg} alt="" className="bookmarkImgCss"></img>
      </div>

      <div className="allStation">
        <div className="firstStationAll">
          <div className="firstBusRoute">
            <div className="jisunCss">지선</div>
            <div>203</div>
          </div>
          <div className="blackStationTime">
            <div>6분</div>
            <div>(4정거장 전)</div>
          </div>
        </div>  

          <div className="firstStationAll">
            <div className="firstBusRoute">
              <div className="gansunCss">간선</div>
              <div>618</div>
            </div>
          <div className="orangeStationTime">
            <div>3분</div>
            <div>(2정거장 전)</div>
          </div>
        </div>  

        <div className="firstStationAll">
          <div className="firstBusRoute">
            <div className="jisunCss">지선</div>
            <div>216</div>
          </div>
          <div className="redStationTime">
            <div>잠시후 도착</div>
            <div>(1정거장 전)</div>
          </div>
        </div>  
      </div>

    </div>
  )
}
export default FavoritesList