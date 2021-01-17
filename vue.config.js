const PROXY_TARGETS = {
  local: 'http://localhost:3000/',
  prod: 'https://valuedash.scalevision.net/'
}

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transformAssetUrls = {
          img: 'src',
          image: 'xlink:href',
          'b-avatar': 'src',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  },
  assetsDir: 'static-assets',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '^/api': {
        target: PROXY_TARGETS.prod,
        ws: true,
        changeOrigin: true
      }
    }
  },
  lintOnSave: true,
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Furnico Project'
    }
  },
  productionSourceMap: false
}
