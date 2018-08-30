const HtmlWebPackPlugin = require("html-webpack-plugin");
configFile = JSON.stringify(require('./config/config.dev.json'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  externals: {
    'config': configFile
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      'process.env': {
          NODE_ENV: JSON.stringify('development')
      }
    }),
  ]
};