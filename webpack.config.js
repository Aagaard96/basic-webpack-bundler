const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  plugins: [
    new MiniCssExtractPlugin(), new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        //test: path.resolve(__dirname, "src/scss/*"),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader' ],
      },
      {
        test: /\.(jpe?g|png)$/i,
        type: "asset",
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
    ],
  },
  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
          options: {
            encodeOptions: {
              jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 50,
              },
              webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
              },
              avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true,
              },
              png: {
                quality: 10,
                compressionLevel: 9
              }
            },
          },
        },
      }),
    ],
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080,
  },
};
