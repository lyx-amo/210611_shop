module.exports = {
  // lintOnSave: false, // 关闭ESLint的规则检查
  lintOnSave: 'warning', // 输出提示错误, 但项目继续运行
  devServer:{
    proxy:{
      '/api':{
        target:'http://39.98.123.211',//目标服务器地址
        changeOrigin:true,//支持跨域
        // pathRewrite:{'^/api':''}//重写路径
      }
    }
  }
}