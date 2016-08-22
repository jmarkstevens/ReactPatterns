const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'ui-src', 'app.jsx');
const DIST_PATH = path.resolve(ROOT_PATH, 'ui-dist');

module.exports = {

  entry: [
    'webpack-hot-middleware/client',
    SRC_PATH
  ],

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
      {test: /\.(png|jpg|ico)$/, loader: 'file-loader?name=img/[name].[ext]'},
      {test: /\.(html)$/, loader: 'file-loader?name=[name].[ext]'}
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('app.css', {allChunks: true})
  ],
  resolve: {extensions: ['', '.js', '.jsx']}
};
