const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/app.js",
    component: "./src/classes/component.js",
    character: "./src/classes/character.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
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

/*
const config = {
  mode: "development",
  entry: {
    index: "./src/index.js",
    component: "./src/classes/Component.js",
    character: "./src/classes/Character.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    open: false,
    liveReload: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["css-loader"],
        options: {
          esModule: true,
          modules: {
            namedExport: true,
          },
        },
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        include: path.resolve(__dirname, "assets"),
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  experiments: {
    topLevelAwait: true,
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.devtool = "eval";
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
    config.devtool = "source-map";
  }
  return config;
};*/
