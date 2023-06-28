import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
 import 'dotenv/config';
@Controller('/map')
export class KakaoMapController {
  constructor() {}

  @Get()
  async getMap(@Res() res: Response) {
    // 클라이언트 측에서 실행되어야 할 카카오 맵 API 코드
    // 예시: 카카오 맵을 생성하고 지도를 표시하는 코드
    const kakaoMapScript = `
      var mapContainer = document.getElementById('map');
      var mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3
      };

      var map = new kakao.maps.Map(mapContainer, mapOption);
    `;

    // 클라이언트로 응답할 HTML 파일
    const html = `
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kakao Map</title>
        <script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_API_KEY&autoload=false"></script>
      </head>
      <body>
        <div id="map" style="width: 500px; height: 400px;"></div>
        <script>
          // 카카오 맵 API 스크립트 로드 후 실행
          function initMap() {
            ${kakaoMapScript}
          }
          
          // 카카오 맵 API 스크립트 로드
          var script = document.createElement('script');
          script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_MAP}&libraries=services&autoload=false';
          script.onload = function() {
            kakao.maps.load(function() {
              initMap();
            });
          };
          document.head.appendChild(script);
        </script>
      </body>
      </html>
    `;

    // HTML 파일을 클라이언트로 응답
    res.send(html);
  }
}
