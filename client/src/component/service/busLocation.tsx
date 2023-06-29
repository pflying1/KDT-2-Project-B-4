import React, { useEffect, useState } from 'react';

interface BusData {
  ServiceResult: {
    msgHeader: {
      currentPage: string;
      headerCd: string;
      headerMsg: string;
      itemCnt: string;
      itemPageCnt: string;
    };
    msgBody: { 
      itemList: [{
        ARR_TIME: number;
        BUS_NODE_ID: number;
        BUS_STOP_ID: number;
        DIR: number;
        EVT_CD: number;
        GPS_LATI: number;
        GPS_LONG: number;
        PLATE_NO: string;
        ROUTE_CD: number;
        STRE_DT: number;
        TOTAL_DIST: number;
        ud_type: number;
      }] 
    };
  }
}


const BusLocationData: React.FC = () => {
  const [data, setData] = useState<BusData>();

  useEffect(() => {
    fetch('http://localhost:3000/bus')
      .then(response => response.json())
      .then((data: BusData) => setData(data))
      .catch((error) => console.log(error))
  }, [])

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.ServiceResult.msgBody.itemList.map((item) => (
        <div key={item.BUS_NODE_ID}>
          {item.ARR_TIME}
        </div>
      ))}
    </div>
  )
}

export default BusLocationData;
