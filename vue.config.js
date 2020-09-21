module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5,
          })
        ]
      }
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "https://elm.cangdu.org",
        changeOrigin: true,
        pathRewrite: { "^/api": "" }
      }
    }
  }
}