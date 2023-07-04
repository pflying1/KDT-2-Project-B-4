/**
 * 마커를 삭제하는 함수입니다.
 *
 * @param marker 삭제할 마커 객체입니다.
 */
const removeMarker = (marker: any) => {
  marker.setMap(null); // 마커를 지도에서 제거합니다.
};

export default removeMarker;

