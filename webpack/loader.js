const selectedPreprocessor = sass;

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

module.exports = {
  selectedPreprocessor
}