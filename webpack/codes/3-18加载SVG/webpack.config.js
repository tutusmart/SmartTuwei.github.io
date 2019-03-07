const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {WebPlugin} = require('web-webpack-plugin');

module.exports = {
  // JS 执行入口文件
  entry: {
    main: './main.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader'],
        }),
      },
      {
        test: /\.svg/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: `[name].css`,
    }),
    new WebPlugin({
      template: 'template.html',
      filename: 'index.html',
      requires: ['main']
    })
  ]
};
