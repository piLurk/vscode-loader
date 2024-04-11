const path = require("path");

const distPath = path.join(__dirname, "./src");
// const distPath = "/Users/bytedance/icube-mono/lib/vscode/out-build/vs";

// const distPath = "/Users/bytedance/icube-mono/lib/vscode/src/vs";

// const distPath = "/Users/bytedance/framework-vscode/src/vs";

const config = {
  mode: "production",
  entry: "./src/core/main.ts",
  output: {
    filename: "loader.js",
    path: distPath,
    libraryTarget: "umd",
    library: {
      type: "var",
      // 全局变量赋值
      name: "__icube_loader__",
    },
    // 兼容多端
    globalObject: "globalThis",
  },
  target: ["node"],
  resolve: {
    extensions: [".ts", ".js"], // support ts-files and js-files
    alias: {},
    fallback: {
      assert: require.resolve("assert"),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },
};

module.exports = [config];
