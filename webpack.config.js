const path = require('path');

module.exports = {
  entry: './test.ts',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".ts",".tsx"],
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
  },
};
