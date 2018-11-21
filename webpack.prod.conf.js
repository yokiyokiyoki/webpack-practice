const webpackMerge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.base.conf');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = webpackMerge(common, {
  mode: 'production',
  output: {
    filename: '[name].[chunkHash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  //单独生成source-map，为bundle添加了一个引用注释
  devtool: 'source-map',
  plugins: [
    //每次构建先清理dist
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    //修复vendor每次打包，如果main.js引进来新的包，module.id会跟根据解析顺序自增然后导致的hash变化
    new webpack.HashedModuleIdsPlugin()
  ],
  //优化选项
  optimization: {
    //将运行时代码单独剥离，减少主文件体积
    runtimeChunk: 'single',
    //将第三方代码剥离，放进vendor
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
});

module.exports = config;
