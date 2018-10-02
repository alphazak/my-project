module.exports = {
  /*
  ** Headers of the page
  */
 head: {
  // this htmlAttrs you need
  htmlAttrs: {
    lang: 'fr',
    meta: { rel:"stylesheet",
           href:"https://unpkg.com/v-data-table/dist/v-data-table.css"
          }
  }
},
plugins: ['~plugins/vue-instantsearch'],
  head: {
    title: 'alpha',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'alpha test' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
 css: [
  { src: '~assets/css/style.css', lang: 'css' }
],
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true
  }
}
