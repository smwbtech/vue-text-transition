module.exports = {
  presets: [
    ['minify'],
    [
      '@vue/cli-plugin-babel/preset',
      {
        useBuiltIns: false
      }
    ]
  ],
  plugins: ['transform-vue-jsx', '@babel/plugin-transform-runtime']
}
