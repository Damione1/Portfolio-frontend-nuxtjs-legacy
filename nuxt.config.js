export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Portfolio Frontend',
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
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    /*
     ** Axios module configuration
     */
    axios: {
        baseURL: process.env.API_URL || 'http://localhost:4000',
        credentials: true,
        proxy: true
    },

    headers: {
        post: {
            Accept: 'application/json, text/plain, */*'
        }
    },
    auth: {
        redirect: {
            login: '/backend/login',
            logout: '/backend/login',
            home: '/backend'
        },
        strategies: {
            local: {
                scheme: 'refresh',
                token: {
                    property: 'token',
                    maxAge: 300
                },
                refreshToken: {
                    property: 'refresh_token',
                    data: 'refresh_token'
                },
                user: {
                    property: 'user',
                    autoFetch: true
                },
                autoLogout: false,
                tokenRequired: true,
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post' },
                    refresh: { url: '/api/auth/refreshToken', method: 'post' },
                    user: { url: '/api/auth/getCurrentUser', method: 'get' },
                    logout: { url: '/api/auth/logout', method: 'get' }
                }
            }
        }
    },

    dateFns: {
        locales: ['en', 'fr'],
        defaultLocale: 'en-CA',
        format: 'yyyy-MM-dd'
    },

    vuetify: {
        icons: {
            iconfont: 'mdiSvg' // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
        }
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify',
        '@nuxtjs/eslint-module',
        '@nuxtjs/date-fns'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/auth-next'
    ],

    proxy: {
        '/api': process.env.API_URL,
        '/files': process.env.API_URL
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: { postcss: null },

    server: {
        port: 3001
    }
}