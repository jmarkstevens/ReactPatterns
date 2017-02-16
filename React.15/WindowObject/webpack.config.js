const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const configJson = require('./webpack.config.json');

module.exports = (env) => {

  const noMinimize = env.noMinimize;
  var plugins = [];

  plugins.push(new ExtractTextPlugin({filename: 'app.css', allChunks: true}));
  plugins.push(new webpack.optimize.CommonsChunkPlugin({name: 'lib'}));
  if (noMinimize) {
    plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('development')}}));
  } else {
    plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}));
    plugins.push(new webpack.optimize.UglifyJsPlugin({include: /lib\.js/, minimize: true}));
  }

  const ROOT_PATH = path.resolve(__dirname);
  const SRC_PATH = path.resolve(ROOT_PATH, './ui-src');
  const DIST_PATH = path.resolve(ROOT_PATH, './ui-dist');


  return {
    context: SRC_PATH,
    entry: {
      app: './app.jsx',
      lib: configJson.lib
    },

    output: {
      path: DIST_PATH,
      filename: '[name].js'
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {presets:['es2015', 'react', 'stage-0']},
          exclude: /(node_modules)/,
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader'
          })
        },
        {
          test: /\.(png|jpg|ico|gif)$/,
          loader: 'file-loader?name=img/[name].[ext]'
        },
        {
          test: /\.(html)$/,
          loader: 'file-loader?name=[name].[ext]'
        }
      ]
    },
    plugins,
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules']
    }
  };
};
