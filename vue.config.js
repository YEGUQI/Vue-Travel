const path = require('path')
module.exports = {
  devServer: {
    host: 'localhost',//target host
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.join(__dirname, './src/'))
      .set('style', path.join(__dirname, './src/assets/style'))
      .set('common', path.join(__dirname, './src/common'))
  },
};