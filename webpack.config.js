const path = require("path");
const webpack = require("webpack");

module.exports = {
  /** tells Webpack where our application starts and where to start bundling our files */
  entry: "./source/index.js",

  /**
   *  module object defines how exported JavaScript modules are transformed and sets rules
   *  on which ones to include in the output bundle.
   */
  module: {
    rules: [

      {
      /**
       *  This rule transforms ES6 and JSX syntax.
       *
       *  `test` and `exclude` properties are conditions to match files against. Here it
       *  matches anything outside node_modules and bower_components directories.
       *
       *  `loader` property directs Webpack to use Babel for transforming the matched files.
       *  options.presets makes Webpack tell Babel which presets to use for transformations.
       */
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
      /**
       *  This rule processes CSS. Since we're not pre-processing our CSS, we just need to
       *  add `style-loader` and `css-loader` to `use` property. `css-loader` requires
       *  `style-loader` to work.
       */
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
      /**
       *  This rule processes CSS. Since we're not pre-processing our CSS, we just need to
       *  add `style-loader` and `css-loader` to `use` property. `css-loader` requires
       *  `style-loader` to work.
       */
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader"
      }
    ]
  },

  /**
   *  Specify which file extensions should Webpack resolve. Allows importing modules without
   *  having to add their extensions in the `import` statement.
   */
  resolve: { extensions: ["*", ".js", ".jsx"] },

  /** Destination for bundled code */
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },

  /** Configure development server */
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: process.env.WEBPACK_DEV_SERVER_PORT || 3000,
    publicPath: "http://localhost:3000/dist/"
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
};
