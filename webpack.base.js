// var webpack = require("webpack");
// var CompressionPlugin = require("compression-webpack-plugin");
// var SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

// module.exports = {
//   // Tell webpack to run babel on every file it runs through
//   module: {
//     rules: [
//       {
//         test: /\.js?$/,
//         loader: "babel-loader",
//         exclude: /node_modules/,
//         options: {
//           presets: [
//             "stage-0",
//             "react",
//             ["env", { targets: { browsers: ["last 3 versions"] } }]
//           ],
//           plugins: ["emotion"]
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: "css-loader",
//             options: {
//               importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//         loader: "url-loader",
//         options: {
//           limit: 10000
//         }
//       },
//       {
//         test: require.resolve("jquery"),
//         use: [
//           {
//             loader: "expose-loader",
//             options: "jQuery"
//           },
//           {
//             loader: "expose-loader",
//             options: "$"
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     // Provides jQuery for other JS bundled with Webpack

//     new webpack.DefinePlugin({
//       // <-- key to reducing React's size
//       "process.env": {
//         NODE_ENV: JSON.stringify("production")
//       }
//     }),
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery",
//       "window.jQuery": "jquery"
//     }),
//     new SWPrecacheWebpackPlugin({
//       cacheId: "ihi",
//       dontCacheBustUrlsMatching: /\.\w{8}\./,
//       filename: "incredible-holiday-india.js",
//       minify: true,
//       staticFileGlobsIgnorePatterns: [
//         /\.map$/,
//         /asset-manifest\.json$/,
//         /\.js$/,
//         /\.css$/,
//         /\.png$/,
//         /\.jpg$/
//       ]
//     }),
//     new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|it/),
//     new webpack.optimize.OccurrenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({
//       warnings: false,
//       compress: {},
//       extractComments: true,
//       cache: true,
//       parallel: true
//     }),
//     new webpack.optimize.AggressiveMergingPlugin(),
//     new CompressionPlugin({
//       asset: "[path].gz[query]",
//       algorithm: "gzip",
//       test: /\.js$|\.css$|\.html$/,
//       threshold: 10240,
//       minRatio: 0.8
//     })
//   ]
// };

var webpack = require("webpack");
var CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "stage-0",
            "react",
            ["env", { targets: { browsers: ["last 3 versions"] } }]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader",
            options: {
              importLoaders: 2 // 0 => no loaders (default); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000
        }
      },
      {
        test: require.resolve("jquery"),
        use: [
          {
            loader: "expose-loader",
            options: "jQuery"
          },
          {
            loader: "expose-loader",
            options: "$"
          }
        ]
      }
    ]
  },
  plugins: [
    // Provides jQuery for other JS bundled with Webpack
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en|it/),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};
