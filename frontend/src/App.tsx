import React, { useState, useEffect } from 'react';

function App() {
  const [hello, setHello] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/test');
        const data = await response.json();
        setHello(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>{hello}</div>
      <div>시작 하세요.</div>
    </div>
  );
}

export default App;
