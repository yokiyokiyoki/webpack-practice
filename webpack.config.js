//支持无配置，但是有项目也需要复杂的配置
const path = require("path");
module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  }
};
