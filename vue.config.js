const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  configureWebpack: {
    mode: 'production',
    plugins: [new TerserPlugin()]
  }
}
