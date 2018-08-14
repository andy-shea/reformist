const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './example/index.js',
  output: {filename: 'bundle.js'},
  module: {
    rules: [{test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/}]
  },
  resolve: {extensions: ['.js', '.jsx']},
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}
