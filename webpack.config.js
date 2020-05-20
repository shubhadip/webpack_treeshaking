const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath:  '/',
    },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  }
};