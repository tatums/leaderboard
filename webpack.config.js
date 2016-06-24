var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style!css"
      },
      {
        test: /\.html$/,
        loader: 'raw'
      }
    ]
  }
};
