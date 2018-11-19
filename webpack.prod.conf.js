const webpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.base.conf");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const config = webpackMerge(common, {
  mode: "production",
  //单独生成source-map，为bundle添加了一个引用注释
  devtool: "source-map",
  plugins: [
    //每次构建先清理dist
    new CleanWebpackPlugin(["dist"]),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    })
  ],
  optimization: {
    //创建单个运行时
    runtimeChunk: "single"
  }
});

module.exports = config;
