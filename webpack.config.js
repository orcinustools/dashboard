const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "dist");
const SRC_DIR = path.resolve(__dirname, "src");

const config = {
	entry: SRC_DIR + "/app/index.js", // bisa menggunakan object untuk split bundle
	
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	
	module: {
		rules: [
			{ // loader for js files
				test: /\.jsx?$/,
				include: SRC_DIR, // include the source file
				exclude: /node_modules/, // exclude the node_module directory
				use: "babel-loader" // using babel loader
			},
			{ // loader for sass, scss files
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{ // loader for css files
				test: /\.css$/,
				// Untuk memisahkan file css dari file bundle.js
				// akan menghasilkan file style.css
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			},
			{
				test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
				use: [
					{ loader: 'url-loader?limit=100000@name=[name][ext]' }
				]
			}
		]
	},

	plugins: [
    new webpack.ProvidePlugin({
	    $: 'jquery',
	    jQuery: 'jquery'
    }),
    new ExtractTextPlugin({
			filename: 'style.css'		
		}),
		new HtmlWebpackPlugin()
	]

};

module.exports = config;