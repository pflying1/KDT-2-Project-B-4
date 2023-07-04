import React, { useState } from "react";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const [postData, setPostData] = useState<BusStopData[]>([]);
  function handleDataChange(data: BusStopData[]) {

  }

  return (
    <div className="containerHead">
      <SearchBar onPostDataChange={handleDataChange} />
    </div>
  );
};

export default Header;
