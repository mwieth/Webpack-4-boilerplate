const {
  preprocessorName
} = require('../webpack.config');

const stylus = {
  fileRegexp: /\.styl$/,
  loaderName: 'stylus-loader'
}
const sass = {
  fileRegexp: /\.sass$/,
  loaderName: 'sass-loader'
}

const less = {
  fileRegexp: /\.less$/,
  loaderName: 'less-loader'
}

/* ENTER YOUR PREPROCESSOR HERE */
const selectedPreprocessor = sass;

module.exports = {
  selectedPreprocessor
}