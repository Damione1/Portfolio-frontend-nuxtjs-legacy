export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'portfolio-frontend',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
              }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/axios.js'],

    /*
     ** Axios module configuration
     */
    axios: {
        baseURL: process.env.API_URL || "http://localhost:3000/",
        credentials: true,
        proxy: true
    },
    headers: {
        post: {
            'Accept': 'application/json, text/plain, */*'
        }
    },
    auth: {
        redirect: {
            login: '/backend/login',
            logout: '/users/login',
            home: '/backend'
        },
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                  property: 'token',
                  maxAge: 1800,
                },
                refreshToken: {
                  property: 'refreshToken',
                  data: 'refreshToken',
                  //maxAge: 60 * 60 * 24 * 30
                },
                user: {
                  property: 'user',
                  autoFetch: true
                },
                endpoints: {
                    login: { url: process.env.API_URL + 'api/auth/login', method: 'post'},
                    refresh: { url: process.env.API_URL + 'api/auth/refreshtoken', method: 'post'},
                    user: { url: process.env.API_URL + 'api/auth/getCurrentUser', method: 'get'},
                    logout: false,
                },
                tokenRequired: true,
                tokenType: 'Bearer'    
            }
        }
    },



    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/auth',
    ],

    proxy: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    server: {
        port: 3001,
    }
}