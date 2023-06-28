// src/types/kakao.maps.d.ts
declare namespace kakao.maps {
  // 여기에 카카오 맵의 여러 가지 타입 정의를 추가...
  // 예시:
  class Map {
    constructor(container: HTMLElement, options: object);
  }

  class LatLng {
    constructor(lat: number, lng: number);
  }

  function load(callback: () => void): void;
}

declare global {
  interface Window {
    kakao: any; 
  }
}
declare global {
  interface Window {
    kakao: any;
  }
}
declare global {
  interface Window {
    DATA: Data;
  }
}
export {};
