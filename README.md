#Webpack 4 Boilerplate
This Webpack 4 Biolerplate comes with 2 builds:

--> webpack-dev-server --env dev --mode none
  starts dev server on localhost:8080 with livereload, sourcemap

--> webpack --env prod --mode production
  creates prod mode with
    1.compiles sass/stylus/less to css
    2.autoprefixer for browser compability
    3.compiles es6/typescript to es5
    3.minifying for css/ js
    2.uglyfing js code
    hash css and js file(browser caching)

#Setup
1. clone and run npm install in project folder

