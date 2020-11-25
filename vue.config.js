'use strict'

const path = require('path')

module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve('examples'))
      .set('~', path.resolve('packages'))

    config.module.rule('eslint').exclude.add(path.resolve('lib')).end()

    config.module
      .rule('js')
        .include.add('/examples').end()
        .include.add('/packages').end()
      .use('babel').loader('babel-loader')
  }
}