const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

module.exports = {
  entry: './src/index.js',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory=true',
            options: {
              ...JSON.parse(fs.readFileSync(path.resolve(__dirname, '.babelrc'))),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx' , '.css'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  output: {
    path: `${__dirname}/build`,
    publicPath: '',
    filename: 'index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
  },
};
