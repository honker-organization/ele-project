const path = require("path");

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
  // 解决跨域
  // devServer:{
  //   proxy: {
  //     "/api": {
  //       target: "https://h5.ele.me", //获取验证码的协议域名
  //       pathRewrite: {"^/api" : ""},
  //       changeOrigin:true
  //     }
  //   }
  // }
  devServer:{
    proxy: {
      "/api": {
        target: "https://elm.cangdu.org", //获取验证码的协议域名
        pathRewrite: {"^/api" : ""},
        changeOrigin:true
      }
    }
  }
  
}
