const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const { BUILD_DIR, SRC_DIR } = require('./env');

const cssLoader = require('./loaders/css');
const jsLoader = require('./loaders/js');
const otherLoader = require('./loaders/other');

module.exports = {
  entry: ['@babel/polyfill', path.join(SRC_DIR, 'client')],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({})
    ]
  },
  devServer: {
    contentBase: BUILD_DIR,
    port: 4200
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: path.join(SRC_DIR, 'index.html')
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
			cssLoader.client,
			...jsLoader.client,
			// ...otherLoader.client,
    ]
  }
}