const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  entry: path.join(__dirname, '../client/index.tsx'),
  devServer: {
    contentBase: path.join(__dirname, '../client/dist'),
    compress: true,
    port: 9000,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../client/public', 'index.html')
    })
  ],
  output: {
    filename: 'bundle_front.js',
    path: path.resolve(__dirname, '../client/dist')
  }
};
