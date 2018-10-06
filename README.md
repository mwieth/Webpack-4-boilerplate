# Webpack 4 Boilerplate ES6/Sass with build-in option to change preprocessor (less/stylus)
This Webpack 4 Boilerplate comes with 2 builds:

--> <code>npm run build:dev</code> <br>
  starts dev server on localhost:8080 with livereload, sourcemap

--> <code>npm run build:prod</code> <br>
  creates prod mode with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for browser compability <br>
  3. compiles es6/typescript to es5 <br>
  4. minifying for css/ js <br>
  5. uglyfing js code <br>
  6. hash css and js file (browser caching) <br>

# Setup
1. clone and run <code>npm install</code> in project folder

# Preprocessor support (default: Sass)

--> if u want to change to <strong>less</strong> run:

  1. <code>npm install less less-loader --save-dev</code>
  2. <code>npm uninstall node-sass sass-loader</code>

  3. set selectedPreprocessor in \webpack\loader.js to less

  4. change default files in styles from sass to less

--> if u want to change to <strong>stylus</strong> run:

  1. <code>npm install stylus stylus-loader --save-dev</code>
  2. <code>npm uninstall node-sass sass-loader</code>

  3. set selectedPreprocessor in \webpack\loader.js to stylus

  4. change default files in styles from sass to stylus



