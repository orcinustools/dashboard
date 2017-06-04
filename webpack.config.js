const webpack 					= require("webpack");
const path 							= require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const DIST_DIR 		= path.resolve(__dirname, "dist");
const SRC_DIR 		= path.resolve(__dirname, "src");

const VENDORS_DIR 			= path.resolve(__dirname, "src/app/vendors");
const NODE_MODULES_DIR 	= path.resolve(__dirname, "node_modules");

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
				exclude: [NODE_MODULES_DIR, VENDORS_DIR], // exclude the node_module directory
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
				exclude: path.resolve(__dirname, "src/app/assests/favico"),
				use: [
					{ loader: 'url-loader?limit=100000@name=[name][ext]' }

				]
			},			
			{
				test: /\.ico$/,
				use: [
					{ 
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'img/',
							publicPath: 'img/'
						}
					}
				]
			}
		]
	},

	plugins: [
		// Webpack plugin jquery
    new webpack.ProvidePlugin({
	    $: 'jquery',
	    jQuery: 'jquery'
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress:{
    //     warnings: true
    //   }
    // }),
		new webpack.EnvironmentPlugin({
		  NODE_ENV: "development",
		  ORCINUS_HOST: "localhost",
		  ORCINUS_PORT: 4000,
		  OMURA_HOST: "localhost",
		  OMURA_PORT: "5009",
		  STATIC_ASSET_HOST: "localhost", // live-server --port=8081 
		  																// in src/app/assests/images/catalog directory
		  STATIC_ASSET_PORT: "8081"
		}),

    // Webpack plugin untuk memisah file css
    // agar tidak diinclude ke dalam file 
    // bundle.js
    new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		})
	]

};

module.exports = config;