var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'ui-src', 'app.js');
const LIB_PATH = path.resolve(ROOT_PATH, 'ui-src/lib', 'primus.js');
const DIST_PATH = path.resolve(ROOT_PATH, 'ui-dist');

module.exports = {

	entry: {
		app: SRC_PATH
	},

	output: {
		path: DIST_PATH,
		filename: "[name].js"
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: [/lib/, /node_modules/],
				loader: 'babel',
				query: {presets:[ 'es2015', 'react', 'stage-0' ]}
			},
			{test: /\.css$/, loader: ExtractTextPlugin.extract("css-loader")},
			{test: /\.(png|jpg|ico)$/, loader: 'file-loader?name=img/[name].[ext]'},
			{test: /\.(html)$/, loader: 'file-loader?name=[name].[ext]'}
		]
	},
	plugins: [new ExtractTextPlugin('app.css', {allChunks: true})],
	resolve: {extensions: [ '', '.js' ]}
};
