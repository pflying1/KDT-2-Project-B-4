import React, { useState, useEffect } from "react";
import { io, Socket } from "socket.io-client";

interface IUrl {
  url: string;
}

const SocketApp: React.FC = () => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [urlData, setUrlData] = useState<IUrl | null>(null);
  const [url] = useState<string>("");

  useEffect(() => {
    const socketInstance = io("http://localhost:3000/api/buslocation/socket");
    setSocket(socketInstance);

    // 이벤트 핸들러 설정
    socketInstance.on("busevents", (data: IUrl) => {
      setUrlData(data);
      console.log("busevents on: ", data);
    });

    socketInstance.on("error", (error: { message: string }) => {
      console.error("Error receiving data:", error.message);
    });

    // 클린업 함수를 통해 소켓 인스턴스 제거
    return () => {
      socketInstance.disconnect();
    };
  }, [url]);
  console.log(JSON.stringify(urlData, null, 2))

  const startRequest = () => {
    if (socket) {
      socket.emit("start");
    }
  };

  const stopRequest = () => {
    if (socket) {
      socket.emit("stop");
    }
  };

  return (
    <div>
      <button onClick={startRequest}>1번 버튼 (API 요청 시작)</button>
      <button onClick={stopRequest}>2번 버튼 (API 요청 중지)</button>
      <div>
        {urlData && <pre>{JSON.stringify(urlData, null, 2)}</pre>}
      </div>
    </div>
  );
};

export default SocketApp;
