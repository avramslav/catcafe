const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    publicPath: `/`,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, `public`)
    },
    historyApiFallback: true,
    open: true,
    hot: true,
    port: 3030,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
          options: {
            presets: [
              `@babel/preset-env`,
              `@babel/preset-react`,
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.cmp.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /(.png|((?<!.cmp).svg)|.jpg|.gif|.woff|.woff2|.eot|.ttf|.otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`
    }),
  ],
  devtool: 'inline-source-map',
}
