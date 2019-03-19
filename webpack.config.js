const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [{
          test: [/\.js$/],
          exclude: /node_modules/,
          loaders: ['babel-loader'],
        },
        {
          test: [/\.js$/],
          exclude: /node_modules/,
          loaders: ['eslint-loader'],
        }
      ],
    },
};
