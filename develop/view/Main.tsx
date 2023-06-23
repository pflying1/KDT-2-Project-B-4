import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./AboutPage";

// TS에서는 React.ReactNode를 배정하면 이해하지 못한다. 그렇기에 공식 홈페이지에서 이를 해석하기 위해 JSX 타입을 사용한다.
// JSX 타입의 경우 함수 형식(JSX.Element)과 클래스 형식(JSX.ElementClass)으로 나뉜다.
type FCReactNode = JSX.Element;

// 함수형 컴포넌트
function App(): FCReactNode {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root") as HTMLElement;
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Root element not found");
}
