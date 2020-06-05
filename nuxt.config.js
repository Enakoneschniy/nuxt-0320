
export default {
  mode: 'universal',
  router: {
    prefetchLinks: false,
    middleware: ['i18n']
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'red',
    height: '5px'
  },
  /*
   ** Global CSS
   */
  css: [
    './node_modules/vue-js-modal/dist/styles.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    './plugins/truncateFilter.js',
    './plugins/validate.js',
    {
      src: './plugins/vue-js-modal.js',
      ssr: true
    },
    './plugins/i18n.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/router'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    ['nuxt-fontawesome', {
      component: 'fa'
    }],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    host: 'localhost',
    port: 8080
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'vee-validate/dist/rules'
    ],
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
    }
  }
}
