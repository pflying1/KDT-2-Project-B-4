import React, { useState, useEffect } from 'react';

function App() {
  const [hello, setHello] = useState()
  const [helloWorld, setHelloWorld] = useState("")
  const [nameData, setNameData] = useState("")

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/hello');
        const data = await response.json();
        setHelloWorld(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    interface User {
      _id: string;
      name: string;
      __v: number;
    }
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/main');
        const dataJson = await response.json();
        const data = dataJson.map((value: User) => value.name)
        setNameData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>{hello}</div>
      <div>{helloWorld}</div>
      <div>{nameData}</div>
      <div>시작 하세요.</div>
    </div>
  );
}

export default App;
