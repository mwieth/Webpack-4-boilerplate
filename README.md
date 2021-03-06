# Webpack 4 Boilerplate ES6/Sass with build-in option to change preprocessor (less/stylus)

![License MIT](https://img.shields.io/github/license/mwieth/Webpack-4-boilerplate)

This <strong>Webpack 4 Boilerplate</strong> comes with 2 builds:

```
npm run build:dev
```

-> starts dev server on <code>localhost:8080</code> with livereload, sourcemap<br><br>

```
npm run build:prod
```

-> creates prod files to <code>/dist</code> with:

1. compiles sass/stylus/less to css <br>
2. autoprefixer for vendor prefixes (browser compability) <br>
3. compiles ES6+ to ES5 <br>
4. minifying for css/js <br>
5. uglyfing js code <br>
6. hash css and js file (file versioning for browser caching -> cache busting) <br>

## Setup

```sh
git clone https://github.com/mwieth/Webpack-4-boilerplate.git
cd Webpack-4-boilerplate
npm install
//start dev mode
npm run build:dev
```

## Preprocessor support (default: Sass)

--> if u want to change to <strong>less</strong> run:

1. <code>npm install less less-loader --save-dev</code>
2. <code>npm uninstall node-sass sass-loader</code>

3. set <code>selectedPreprocessor</code> in \webpack\loader.js to less

4. change default files in styles from sass to less (\*.less) and update <code>import</code> in index.js line 1

--> if u want to change to <strong>stylus</strong> run:

1. <code>npm install stylus stylus-loader --save-dev</code>
2. <code>npm uninstall node-sass sass-loader</code>

3. set <code>selectedPreprocessor</code> in \webpack\loader.js to stylus

4. change default files in styles from sass to stylus (\*.styl) update <code>import</code> in index.js line 1

--> if u want to use the 'original' loose <strong>_.sass</strong> syntax just change the files from
_.scss to _.sass and update the <code>import</code> in <code>index.js</code> line 1
