# Webpack 4 Boilerplate ES6/Sass with build-in option to change preprocessor (less/stylus)
This Webpack 4 Boilerplate comes with 2 builds:

--> npm run build:dev <br>
  starts dev server on localhost:8080 with livereload, sourcemap

--> npm run build:prod <br>
  creates prod mode with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for browser compability <br>
  3. compiles es6/typescript to es5 <br>
  4. minifying for css/ js <br>
  5. uglyfing js code <br>
  6. hash css and js file (browser caching) <br>

# Setup
1. clone and run npm install in project folder

# Preprocessor support (default: Sass)

--> if u want to change to <strong>less</strong> run:

npm install less-loader --save-dev
npm uninstall node-sass sass-loader

set selectedPreprocessor in \webpack\loader.js to less

change default files in styles from sass to less

--> if u want to change to <strong>stylus</strong> run:

npm install stylus-loader --save-dev
npm uninstall node-sass sass-loader

set selectedPreprocessor in \webpack\loader.js to stylus

change default files in styles from sass to stylus



