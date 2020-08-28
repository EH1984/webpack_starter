const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  target: 'node',
  entry: {
    app: ['../server.ts']
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle_back.js'
  },
  externals: [nodeExternals()]
};
