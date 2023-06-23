import React, { useState } from 'react';

function App() {
  const [hello, setHello] = useState()
  fetch('http://localhost:3030/test') // 백엔드 Nest.js 서버의 주소와 포트 번호를 입력하십시오
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // const helloHi = JSON.stringify(data)
    // 받아온 데이터로 필요한 작업 수행
    setHello(data)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  return (
    <div>
      <div>{hello}</div>
      <div>시작 하세요.</div>
    </div>
  );
}

export default App;
