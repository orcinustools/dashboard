var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
	entry: SRC_DIR + "/app/index.js", // bisa menggunakan object untuk split bundle
	
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	
	module: {
		loaders: [
			{ // loader for js files
				test: /\.js$/,
				include: SRC_DIR, // include the source file
				exclude: /node_modules/, // exclude the node_module directory
				loader: "babel-loader" // using babel loader
			}//,
			// { // loader for css files
			// 	test: /\.css$/,
			// 	loader: 'style!css'
			// }
		]
	},
 
	resolve: {
	 extensions: [‘’, ‘.js’, ‘.jsx’]
	}

};

module.exports = config;