const path = require('path'),
  VueLoaderPlugin = require('vue-loader/lib/plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack')

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'vue-loader',
        test: /\.vue$/,
        exclude: /node_modules/
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 9001
  },
  mode: "development"
}