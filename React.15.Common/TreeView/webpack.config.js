var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
var plugins = [];

plugins.push(new ExtractTextPlugin('app.css', {allChunks: true}));
plugins.push(new webpack.optimize.CommonsChunkPlugin('lib', 'lib.js', Infinity));
if (minimize) plugins.push(new webpack.optimize.UglifyJsPlugin({include: /lib\.js/, minimize: true}));

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'ui-src', 'app.jsx');
const DIST_PATH = path.resolve(ROOT_PATH, 'ui-dist');

module.exports = {

  entry: {
    app: SRC_PATH,
    lib: ['react', 'react-dom', 'lodash', 'redux', 'traverse', 'whatwg-fetch', 'react-redux']
  },

  output: {
    path: DIST_PATH,
    filename: 'app.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {presets:['es2015', 'react', 'stage-0']}
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader')},
      {test: /\.(png|jpg|ico|gif)$/, loader: 'file-loader?name=img/[name].[ext]'},
      {test: /\.(html)$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  plugins,
  resolve: {extensions: ['', '.js', '.jsx']}
};
