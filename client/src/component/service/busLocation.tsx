// useBusLocationData.ts
import { useEffect, useState } from "react";
import busLocationMarker from "./busLocationMarker";

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
      }];
    };
  };
}

const BusLocationData = () => {
  const [data, setData] = useState<BusData>();

  useEffect(() => {
    fetch('/api/bus')
      .then(response => response.json())
      .then((data: BusData) => {
        console.log(data.ServiceResult.msgBody.itemList);

        data.ServiceResult.msgBody.itemList.forEach((busLocationInfo) => {
          // busLocationMarker(busLocationInfo.GPS_LATI, busLocationInfo.GPS_LONG, map);
        });
      })
      .catch((error) => console.log(error));
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  const latiAndLong = data?.ServiceResult?.msgBody?.itemList || []

  return latiAndLong;
};

export default BusLocationData
