//支持无配置，但是有项目也需要复杂的配置
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "none",
  entry: { app: path.resolve(__dirname, "src/index.js") },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //顺序是从右到左处理，先css进来然后style动态插入到文档里
        use: ["style-loader", "css-loader"]
        //style-loader已经实现hmr的接口
      },
      {
        //file-loader接受任何类型文件，并返回处理。url-loader与其类似，只不过它可以接受一个限制值，限制值前可以转成dataUrl
        test: /\.(png|gif|svg|jpg)$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [
    //每次构建先清理dist
    new CleanWebpackPlugin(["dist"]),
    //动态插入文档
    new HtmlWebpackPlugin({
      title: "起步"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    //热更新开启，跟hmr配合使用
    hot: true
  }
};
