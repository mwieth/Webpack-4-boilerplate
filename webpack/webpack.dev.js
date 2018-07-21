const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const {
  prod_Path,
  src_Path
} = require('./path');
const {
  selectedPreprocessor
} = require('./loader');

const IS_DEV = process.env.NODE_ENV === 'dev';

module.exports = {
  entry: {
    main: './' + src_Path + '/index.js'
  },
  output: {
    path: path.resolve(__dirname, prod_Path),
    filename: '[name].[chunkhash].js'
  },
  //devtool: 'cheap-module-source-map',
  devtool: 'source-map',
  module: {
    rules: [{
      test: selectedPreprocessor.fileRegexp,
      use: [{
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        },
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: selectedPreprocessor.loaderName,
          options: {
            sourceMap: true
          }
        },
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './' + src_Path + '/index.html',
      filename: 'index.html'
    })
  ]
};