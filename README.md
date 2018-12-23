# Webpack 4 Boilerplate ES6/Sass with build-in option to change preprocessor (less/stylus)
This Webpack 4 Boilerplate comes with 2 builds:

--> <code>npm run build:dev</code> <br>
  starts dev server on <code>localhost:8080</code> with livereload, sourcemap

--> <code>npm run build:prod</code> <br>
  creates prod files to <code>/dist</code> with:

  1. compiles sass/stylus/less to css <br>
  2. autoprefixer for browser compability <br>
  3. compiles ES6/ES7/ES8 to ES5 <br>
  4. minifying for css/js <br>
  5. uglyfing js code <br>
  6. hash css and js file (file versioning for browser caching) <br>

# Setup
1. clone and run <code>npm install</code> in project folder

# Preprocessor support (default: Sass)

--> if u want to change to <strong>less</strong> run:

  1. <code>npm install less less-loader --save-dev</code>
  2. <code>npm uninstall node-sass sass-loader</code>

  3. set <code>selectedPreprocessor</code> in \webpack\loader.js to less

  4. change default files in styles from sass to less (*.less) and update <code>import</code> in index.js line 1

--> if u want to change to <strong>stylus</strong> run:

  1. <code>npm install stylus stylus-loader --save-dev</code>
  2. <code>npm uninstall node-sass sass-loader</code>

  3. set <code>selectedPreprocessor</code> in \webpack\loader.js to stylus

  4. change default files in styles from sass to stylus (*.styl) update <code>import</code> in index.js line 1

--> if u want to use the 'original' loose <strong>*.sass</strong> syntax just change the files from
*.scss to *.sass and update <code>import</code> in index.js line 1
