const webpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.base.conf");
const webpack = require("webpack");

const config = webpackMerge(common, {
  mode: "development",
  //开发环境最佳
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    //热更新开启，跟hmr配合使用
    hot: true
  },
  plugins: [
    //热更新插件
    new webpack.HotModuleReplacementPlugin()
  ]
});

module.exports = config;
