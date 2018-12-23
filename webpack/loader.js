const stylus = {
  fileRegexp: /\.styl$/,
  loaderName: 'stylus-loader'
}
const sass = {
  fileRegexp: /\.(sass|scss)$/,
  loaderName: 'sass-loader'
}

const less = {
  fileRegexp: /\.less$/,
  loaderName: 'less-loader'
}

// Set preprocessor here
const selectedPreprocessor = sass;

module.exports = {
  selectedPreprocessor
}