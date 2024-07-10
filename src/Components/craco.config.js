const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins.push(
        new ImageMinimizerPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.imageminMinify,
            options: {
              plugins: [
                ['mozjpeg', { quality: 80 }],
                ['pngquant', { quality: [0.65, 0.90] }],
              ],
            },
          },
        })
      );
      return webpackConfig;
    },
  },
};