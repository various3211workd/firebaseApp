module.exports = {
  modules: [
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
  ],
  manifest: {
    name: 'app',
    lang: 'ja'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Reversers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
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
    }
  },
  plugins: [
    { src: "~plugins/persistedstate.js", ssr: false }
  ],
  /*
  ** Include css not in components
  */
  css: [
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ]
}

