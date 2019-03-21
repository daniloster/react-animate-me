const HtmlWebPackPlugin = require('html-webpack-plugin');

const sourceMapLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  enforce: 'pre',
  loader: 'source-map-loader'
};
const babelLoader = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    babelrc: false,
    presets: ['react', ['es2015', { modules: false }], 'stage-0'],
    plugins: ['transform-decorators-legacy', ['styled-components', { ssr: true }]]
  }
};
const htmlLoader = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader',
      options: { minimize: true }
    }
  ]
};

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [sourceMapLoader, babelLoader, htmlLoader]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './tools/template/index.html',
      filename: './index.html'
    })
  ]
};
