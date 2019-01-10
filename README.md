# react-template-library-ema
Create react library

WEBPACK CONFIG LIBRARY

1. npm init
2. add in package.json pear dependencies (so this lib. will have exact same version as project that use it)
3. create src dir and add code
4. install webpack, webpack-cli as deve dependecies to bundle js in one js file 
	1. create webpack.config and add entry file, output file name, mode
	2. output should have filename, path,  libraryTarget: umd, library (this is library name)

5. ito transpile js file you need balbel:
    1. install babel-cli, babel-core
    2. install babel-loader to connect babel with webpack and add as rules in module part in wp config file
    3. install babel/preset-env to say what sintax it will transpile (babel-env. preset-flow, preset-react) and add in .babelrc as presets
    4. install "@babel/plugin-proposal-class-properties" and add in babelrc as plugins
6.  .browserlistrc file
7.  in wp config set extrnal dependencies which will not be bundled: set i.e. react as extrnal 
 		react: {
    		root: "React",
      		commonjs2: "react",
      		commonjs: "react",
      		amd: "react"
    		}
8. in package.json change main file to be file we build with webpack!!
9. publish lib
    1. npm login
    2. npm publish —access=public
10. add jest and react testing library for testing
	1. install react testing library , jest , babel-jest, babel-polyfill
	2. add mock for css files fror jest and add moduleNameMapper
	3. don;t forget to import react in jest test as well!
11. add style-loader (to add script tag) and css-loader (to import css)
	1. install 
	2. add options for css-loader: { modules: true, localIdentName: '[path][name]__[local]--[hash:base64:5]', }, -  now you can import as module


Note: because of install-peers, running npm i will install dev, prod and peers dep or you can install these as dev dependencies by yourself

To set up the react app :
https://blog.usejournal.com/creating-a-react-app-from-scratch-f3c693b84658

	1. create public folder which will have static files - index.html
	2. in index.html add script with my bundled and transpiled file and add div which will contain react components
	3. instal webpack-dev-server to serve app

