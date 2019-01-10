const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // file nam will be search relativly to this path
    libraryTarget: "umd",
    library: "webpackLibrary", //This exposes your library bundle available as a global variable named 
    publicPath: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }, 
      {
        test:/\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[path][name]__[local]--[hash:base64:5]',
          },
        },]
      }
    ]
  },
  watch: true,
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },
  optimization: {
      usedExports: true
  },
  // this allows us to import modules without needing to add their extensions
  resolve: { extensions: ["*", ".js", ".jsx"] },
  devServer: {
    //location we’re serving static files from 
    contentBase: path.join(__dirname, "public/"),
    port: 4000,
    //tells the server where our bundled code actually is
    publicPath: "http://localhost:4000/dist/",
  },
};

