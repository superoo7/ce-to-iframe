const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    generator: "./src/generator/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".js"],
    alias: {
      vue: "vue/dist/vue.js"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, `src/index.html`),
      chunks: ["index"]
    }),
    new HtmlWebpackPlugin({
      filename: "generator.html",
      template: path.resolve(__dirname, `src/generator/index.html`),
      chunks: ["generator"]
    })
  ]
};
