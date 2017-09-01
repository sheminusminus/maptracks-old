/**
 * @fileOverview Webpack basic configuration file.
 */

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_FOLDER = path.join(__dirname, 'frontend');
const DIST_FOLDER = path.join(__dirname, 'build');

module.exports = {
  entry: {
    app: path.join(SRC_FOLDER, 'index.js'),
  },
  output: {
    publicPath: '/',
    path: DIST_FOLDER,
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]&sourceMap&-minimize', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        query: {
          configFile: './.eslintrc',
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({  // also generate an index.html
      filename: 'index.html',
      template: 'frontend/static/index.html',
      env: 'development',
    }),
  ],
  devtool: 'source-map',
};
