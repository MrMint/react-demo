var path = require('path');
var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    polyfill: 'babel-polyfill',
    '00': ['./src/00 - hello javascript/index.jsx', 'webpack-hot-middleware/client'] ,
    '01': ['./src/01 - hello jsx/index.jsx', 'webpack-hot-middleware/client'] ,
    '02': ['./src/02 - hello props/index.jsx', 'webpack-hot-middleware/client'] ,
    '03': ['./src/03 - hello composition/index.jsx', 'webpack-hot-middleware/client'] ,
    '04': ['./src/04 - hello chat/index.jsx', 'webpack-hot-middleware/client'] ,
    '06': ['./src/06 - hello state/index.jsx', 'webpack-hot-middleware/client'] ,
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  externals: [
    './node_modules',
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: ['babel'],
      include: path.join(__dirname, './src'),
    }, {
      test: /\.css$/,
      loader: 'style!css?modules&&importLoaders=1&localIdentName=[name]---[local]---[hash:base64:5]!postcss',
      // include: path.join(__dirname, '../app'),
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
      // include: path.join(__dirname, '../app'),
    }, {
      test: /\.json$/,
      loader: 'json-loader',
      // include: path.join(__dirname, '../app'),
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff',
    },
  ],
  },
  externals: {
    'jsdom': 'window',
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  postcss: [
    require('postcss-modules-values'),
  ],
};
