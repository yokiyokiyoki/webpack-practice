const webpackMerge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.base.conf");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

const config = webpackMerge(common, {
  mode: "production",
  plugins: [
    //每次构建先清理dist
    new CleanWebpackPlugin(["dist"])
  ]
});

module.exports = config;
