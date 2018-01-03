const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, '../Server/public')
  },
  module: {
    rules: [
      { test:/\.js$/, use: 'babel-loader' , exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              // name: '[path][name].[ext]',
              // publicPath: 'static/'
            },
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/globals.css"),
    new CopyWebpackPlugin([
          { from: 'src/index.html' }
      ])
  ],
  devServer: {
    proxy: {
      "/api": "http://localhost:3001"
    },
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    stats:"minimal",
    open:true,
    openPage:"",
    historyApiFallback:true
  },
  devtool:"source-map"
};