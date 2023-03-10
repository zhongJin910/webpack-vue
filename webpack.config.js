"use strict";

const path = require("path");
const _path = (file) => path.resolve(__dirname, file);

const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  entry: _path("./src/mian.js"), // 入口
  output: {
    filename: "js/[name].js",
    path: _path("dist"), // 打包输出文件
  },
  devServer: {
    historyApiFallback: true,
    static: { directory: _path("public") }, // 启动文件,
    compress: true,
    port: 7000,
    hot: true, // 热更新
    // open: true, // 启动打开
    // proxy: {
    //   // 代理
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  stats: "errors-only", // 配合 FriendlyErrorsPlugin
  plugins: [
    // 生成 HTML 文件
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
    }),
    // 控制终端输出
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Your application is running here: http://localhost:7000`],
      },
      clearConsole: false, // 是否每次都清空控制台
    }),
    new VueLoaderPlugin(),
    // new BundleAnalyzerPlugin(), //  包大小分析
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
  module: {
    rules: [
      // 编译vue
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      // 编译css
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // 不编译node_modules下的文件
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
