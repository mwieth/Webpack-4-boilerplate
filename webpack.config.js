const path = require('path');

const IS_DEV = process.env.NODE_ENV === 'dev';

module.exports = env => {
  console.log(`🛠️  running ${env} Mode using ./webpack/webpack.${env}.js 🛠️`);
};