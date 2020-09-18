const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 75,
          })
        ]
      }
    }
  }
  
}