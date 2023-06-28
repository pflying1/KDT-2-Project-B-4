import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import introImg from '../view/image/introImg.png';
type LoadingProps = {};

// 함수형 컴포넌트의 이름을 "IntroPage"로 수정합니다. (대문자 시작)
function IntroPage(props: LoadingProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/main');
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <img src={introImg} width='100%' height='100%' alt='이미지' />
    </>
  );
}

export default IntroPage; // 수정된 컴포넌트 이름으로 변경합니다.
