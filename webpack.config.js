var path = require('path')
var webpack = require('webpack')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    contentBase: './public'
  },
  entry: [
    'babel-polyfill',
    './app/index'
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.tag?$/,
        use: 'riotjs-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    }),
    new HtmlWebpackPlugin({
      hash: true,
      template: 'app/index.ejs',
      title: 'Finance Manager'
    })
  ],
  resolve: {
    alias: {
      app: path.resolve(__dirname, 'app')
    }
  }
}
