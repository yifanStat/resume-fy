// vue.config.js
module.exports = {
  outputDir: '../server/dist',
  assetsDir: 'static',
  publicPath: '',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/index.scss"`, 
      }
    }
  },
  devServer: {
    proxy: {
      // proxy 'http://127.0.0.1:8080/api' to 'http://127.0.0.1:3000/api'
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    },
    watchOptions: {
      poll: true
    }
  }
}
