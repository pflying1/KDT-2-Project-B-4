import React, { useState, useEffect } from 'react';

function App() {
  const [hello, setHello] = useState()
  const [helloWorld, setHelloWorld] = useState("")
  const [name, setName] = useState("")

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
        // const jsonData = JSON.stringify(data)
        setHelloWorld(data.message);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3030/main');
        const data = await response.json();
        // const jsonData = JSON.stringify(data)
        setName(data.name);
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
      <div>{name}</div>
      <div>시작 하세요.</div>
    </div>
  );
}

export default App;
