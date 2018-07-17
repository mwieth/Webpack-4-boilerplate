const IS_DEV = process.env.NODE_ENV === 'dev';


module.exports = env => {
  console.log(`🛠️  running ${env} Mode using ./webpack/webpack.${env}.js 🛠️`);
  return require(`./webpack/webpack.${env}.js`);
};