var webpack = require ('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// https://github.com/webpack/webpack/issues/2537
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

//todo: console
console.log('IS_PRODUCTION', IS_PRODUCTION);

var config = {
	// This object for entry file for browser
	entry: './main.js',
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
		
		// https://webpack.js.org/guides/production-build/
		// http://moduscreate.com/optimizing-react-es6-webpack-production-build/
	
	],
	
	devServer: {
		inline: true,
		port: 8080
	},
	
	module: {
		loaders: [
			// This object for Error: Missing class properties transform
			{
				test: /\.js?$/,
				exclude: /(node_modules|bower_components)/,
				loaders: [
					'react-hot-loader',
					'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
				]
			}, // This object for setting up react semantic ui
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
				loader: 'url-loader?limit=100000&name=/[hash].[ext]',
			}, // This code for red css,scss an loader css
			{
				test: /\.(css|scss)$/,
				loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
			},// This object for loader json
			{
				test: /\.json$/, loader: "json"
			}
		]
	}
}

module.exports = config;