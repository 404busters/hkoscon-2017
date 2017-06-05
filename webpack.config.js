'use strict';

require('dotenv').load();

const webpack = require('webpack');
const UglifyPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const AggressiveMergingPlugin = require('webpack/lib/optimize/AggressiveMergingPlugin');
const HotModuleReplacementPlugin = require('webpack/lib/HotModuleReplacementPlugin');
const PrecachePlugin = require('sw-precache-webpack-plugin');

const merge = require('webpack-merge');

const manifest = require('./manifest.json');

const firebaseConfig = {
  FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY || '<API_KEY>'),
  FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN || '<PROJECT_ID>.firebaseapp.com'),
  FIREBASE_DATEBASE_URL: JSON.stringify(process.env.FIREBASE_DATEBASE_URL || 'https://<DATABASE_NAME>.firebaseio.com'),
  FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET || '<BUCKET>.appspot.com'),
  FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID || '<SENDER_ID>'),
  FIREBASE_MESSAGE_SERVER_KEY: JSON.stringify(process.env.FIREBASE_MESSAGE_SERVER_KEY || '<SENDER_KEY>'),
};

const envConfig = {};
Object.keys(firebaseConfig).forEach((key) => {
  envConfig[`process.env.${key}`] = firebaseConfig[key];
});

const base = {
  plugins: [
    new AggressiveMergingPlugin(),
    new webpack.DefinePlugin(envConfig),
    new PrecachePlugin({
      cacheId: 'HKOSCon-2017',
      minify: true,
      filename: 'sw.js',
      handleFetch: true,
      runtimeCaching: [{
        urlPattern: /2017/,
        handler: 'fastest',
      }],
      staticFileGlobs: manifest.web_accessible_resources.map(path => path.replace('/2017', 'public')),
      stripPrefix: 'public',
      verbose: true,
    }),
  ],
  externals: {
    jquery: 'jQuery',
    hammerjs: 'Hammer',
    'node-waves': 'Waves',
    firebase: 'firebase',
    react: 'React',
    'react-dom': 'ReactDOM',
    redux: 'Redux',
    'react-redux': 'ReactRedux',
    'moment-timezone': 'moment',
    toastr: 'toastr',
  },
  entry: {
    app: ['./assets/js/app'],
    timetable: ['./assets/js/timetable'],
    venue: ['./assets/js/venue'],
    staff: ['./assets/js/pages/staff'],
  },
  devtool: 'source-map',
  output: {
    path: `${__dirname}/public`,
    publicPath: '/2017/',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      { test: /\.jsx$/, use: ['babel-loader'] },
    ],
  },
};

const dev = merge.smart({
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:8080/',
    ],
    timetable: [
      'webpack-dev-server/client?http://localhost:8080/',
    ],
    venue: [
      'webpack-dev-server/client?http://localhost:8080/',
    ],
  },
  module: {
    loaders: [
      { test: /\.jsx$/, use: ['react-hot'] },
    ],
  },
}, base);

const production = merge.smart({
  plugins: [
    new UglifyPlugin({
      minimize: true,
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
}, base);

module.exports = {
  base,
  dev,
  production,
};
