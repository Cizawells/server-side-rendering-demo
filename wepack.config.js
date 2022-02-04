module.exports = {
  mode: "development",
  entry: {
    client: "./client/client.js",
  },
  output: {
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exlude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};
