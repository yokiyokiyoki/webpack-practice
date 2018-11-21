module.exports = {
  //当前根目录下，不覆盖其他目录下的文件
  root: true,
  env: {
    //指定环境，才能使用全局变量，不然浏览器Image会报错
    browser: true,
    node: true
  },
  extends: ['standard', 'prettier'],
  //兼容新特性
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error'
    //覆写规则
  },
  plugins: ['prettier']
};
// {
//   "*.js": "工程下的 js 文件",
//   "**/*.js": "工程下所有的 js 文件",
//   "src/*.js": "src 目录中所有的 js 文件",
//   "src/**/*.js": "src 文件夹下所有的 js 文件"
// }