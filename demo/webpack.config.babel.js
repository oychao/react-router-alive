import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';

const config = {
  mode: process.env.NODE_ENV,
  entry: ['@babel/polyfill', 'react-hot-loader/patch', './index.jsx'],
  output: {
    publicPath: '/',
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
    extensions: ['.js', '.json', '.jsx', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader']
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    open: true,
    host: '0.0.0.0'
    // progress: true
  },
  externals: {
    // react: 'React',
    // 'react-dom': 'ReactDOM',
    // redux: 'Redux',
    // 'react-redux': 'ReactRedux'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

if(process.env.NODE_ENV === 'production') {
  config.mode = 'production';
  config.devtool = 'source-map';
  [new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })].forEach(plugin => void (config.plugins.push(plugin)));
}

export default config;
