// postcss.config.js
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // vw适配的标准屏的宽度 iphoneX 375
      // 设计图 750 调成一倍图 => 适配375标准屏幕
      // 设计图 640 调成一倍图 => 适配320标准屏幕
      viewportWidth: 375
    }
  }
}
