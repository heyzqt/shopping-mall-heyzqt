var path = require('path')
var webpack = require('webpack')
// 引入各个文件
// const express = require('express')
// const app = express()
// const router = express.Router()
// const goodListData = require('./src/mock/banner.json')
// app.use('/api', router)

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
    // proxy:{
    //   '/': {
    //     target: 'http://localhost:8080',
    //     changeOrigin: true
    //   }
    // }
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:8080",
    //     changeOrigin: true, //设置这个参数避免跨域
    //     pathRewrite: {
    //       "^/api": '/mock'
    //     }
    //   }
    // }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
  // dev: {
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: '/',
  //   proxyTable: {
  //     '/api': {
  //       target: 'http://localhost:8088',
  //       pathRewrite: {
  //         '^/api': '/static/mock'
  //       }
  //     }
  //   },
  //   host: 'localhost',
  //   port: 8088
  // }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

// const devWebpackConfig = merge(baseWebpackConfig, {
//   devServer: {
//     // 在devserver中加入before函数
//     before(app) {
//       app.get('/api/banner', (req, res, next) => {
//         res.json(goodListData)
//       })
//     }
//   },
// })
