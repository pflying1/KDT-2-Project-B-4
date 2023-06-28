module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // 웹팩 설정을 수정합니다.
      // fallback 설정을 추가하거나 제거할 수 있습니다.
      // 예: os 모듈에 대한 폴리필 추가
      webpackConfig.resolve.fallback = {
        os: require.resolve("os-browserify/browser")
      };

      return webpackConfig;
    }
  }
};