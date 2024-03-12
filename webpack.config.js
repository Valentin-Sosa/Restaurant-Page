const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
				test: /\.(png|jpg|jpeg|gif|svg|webp|avif)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[name][ext]",
				},
			},
    ],
  },
  devtool: 'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'head',
        scriptLoading: 'defer',
    })
   ],
};