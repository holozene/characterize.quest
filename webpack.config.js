const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
    component: "./src/classes/component.js",
    character: "./src/classes/character.js",
    sheet: "./src/classes/sheet.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
    sourceMapFilename: "[name].bundle.map",
    libraryTarget: 'var',
    library: '[name]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        include: path.resolve(__dirname, "assets"),
        type: "asset",
      },
    ],
  },
  devServer: {
    client: {
      overlay: true,
    },
    hot: true,
    watchFiles: ["src/*", "index.html"],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["index.html"],
    }),
  ],
};
