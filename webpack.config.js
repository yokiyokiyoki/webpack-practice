//支持无配置，但是有项目也需要复杂的配置
const path = require("path");
module.exports = {
  mode: "none",
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //顺序是从右到左处理，先css进来然后style动态插入到文档里
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|gif|svg|jpg)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./dist"
  }
};
