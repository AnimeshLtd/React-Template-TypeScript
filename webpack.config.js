const path = require("path");
const webpack = require("webpack");

module.exports = {
  /** Enable sourcemaps for debugging webpack's output */
  devtool: "source-map",

  /**
   *  Specify which file extensions should Webpack resolve. Allows importing modules without
   *  having to add their extensions in the `import` statement.
   */
  resolve: { extensions: ["*", ".js", ".ts", ".tsx"] },

  /** tells Webpack where our application starts and where to start bundling our files */
  entry: "./source/index.tsx",

  /**
   *  When importing a module whose path matches one of the following, just assume a corresponding global
   *  variable exists and use that instead. This is important because it allows us to avoid bundling all
   *  of our dependencies, which allows browsers to cache those libraries between builds.
   */
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

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
       *  `loader` property directs Webpack to use TypeScript compiler for transforming the matched files.
       *  ts-loader helps Webpack compile your TypeScript code using the TypeScript’s standard configuration file named
       *  tsconfig.json.
       */
        test: /\.ts(x?)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "ts-loader",
      },
      {
        /**
         *  source-map-loader uses any sourcemap outputs from TypeScript to inform webpack when generating its own
         *  sourcemaps. This will allow you to debug your final output file as if you were debugging your original
         *  TypeScript source code.
         */
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
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
