var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

// new WebpackDevServer(webpack(config), {

module.exports = {

  context: __dirname,
  entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './app/static/js/index'
  ],

  output: {
      path: path.resolve('./app/static/bundles/'),
      filename: '[name]-[hash].js',
      publicPath: 'http://localhost:3000/app/static/bundles/',
       // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(), // don't reload if there is an error
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    loaders: [
    // This is used to help webpack correctly use image loader plugin to load ima    ges to react-bootstrap:
    { test: /\.(png|jpg|gif)$/, 
        loader: 'file-loader?name=./images/[name].[ext]'
    },
    
    // we pass the output from babel loader to react-hot loader
    { test: /\.jsx?$/, exclude: /node_modules/, 
        loaders: ['react-hot-loader/webpack', 'babel?' + JSON.stringify({presets: ['react', 'es2015']})]
    },
    ],
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
}
