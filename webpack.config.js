// ソースマップの利用有無(productionのときはソースマップを利用しない)
// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development';
// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === 'development';

const PATH = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: MODE,
  entry: './src/assets/js/index.js',

  output: { path: PATH.resolve(__dirname, 'dist'), filename: 'main.js' },
  devServer: {
    contentBase: 'dist',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          // sassをコンパイルさせるためのプラグイン
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              //   0 => no loaders (default);
              //   1 => postcss-loader;
              //   2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      // outputで指定した配下に吐き出される
      filename: 'assets/css/style.css',
      ignoreOrder: true,
    }),

    new StylelintPlugin({
      fix: true,
    }),

    // new CopyPlugin({ from: 'src/assets/images', to: 'assets/images' }),
    // // toはoutputのpathで指定したところを起点とする
  ],
};
