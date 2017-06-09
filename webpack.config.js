const webpack = require("webpack");
const path = require('path');

const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  devtool: "inline-source-map",
  entry: [
    "./src/index.js"
  ],
  output: {
    path: require("path").resolve("./dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /pixi.js/, loader: 'expose-loader?PIXI' },
      { test: /p2/, loader: 'expose-loader?p2' },
      { test: /phaser-split/, loader: 'expose-loader?Phaser' },
    ]
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi.js': pixi,
      'p2': p2,
    }
  }
}
