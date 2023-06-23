const path = require("path");
const nodeExternals = require('webpack-node-externals');

const clientConfig = {
  entry: path.resolve(__dirname,"develop","view","Main.tsx"),
  mode: "development",
  module: {
    rules:[
      {
        test:/\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test:/\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.css?$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve:{
    extensions: [".tsx",".ts",".js"],
  },
  output:{
    filename: "main-bundle.js",
    path: path.resolve(__dirname,"dist"),
    publicPath:"/static/"
  },
  devServer : {
    static : path.join(__dirname, "dist"),
    compress : true,
    historyApiFallback : true,
    port : 8080,
    hot : true,
    open: true,
},
};
const serverConfig = {
  entry: path.resolve(__dirname, "backend","app-server.ts"),
  mode: "development",
  module: {
      rules: [
          //TS로더
          {
              test: /\.tsx?$/,
              exclude: /node_modules/,
              use: "ts-loader",
          },

      ],
  },
  resolve: {
      extensions: [".tsx", ".ts", ".js"],
  },
  output: {
      filename: "server-bundle.js",
      path: path.resolve(__dirname, "dist")
  },
  target: "node",
  externals: [nodeExternals()],
};

module.exports = [clientConfig, serverConfig];