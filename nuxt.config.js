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

    render: { fallback: false },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    /*
     ** Axios module configuration
     */
    axios: {
        baseURL: process.env.API_URL || 'http://localhost:4000',
        credentials: false
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
                    login: { url: process.env.API_URL + '/auth/login', method: 'post' },
                    refresh: { url: process.env.API_URL + '/auth/refreshToken', method: 'post' },
                    user: { url: process.env.API_URL + '/auth/getCurrentUser', method: 'get' },
                    logout: { url: process.env.API_URL + '/auth/logout', method: 'get' }
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

    markdownit: {
        preset: 'default',
        linkify: true,
        breaks: true,
        injected: true
    },

    router: {
        linkExactActiveClass: 'bg-gray-200 rounded'
    },
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        '@nuxtjs/vuetify',
        '@nuxtjs/eslint-module',
        '@nuxtjs/date-fns',
        '@nuxtjs/tailwindcss'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next', ['@nuxtjs/pwa', { meta: false, icon: false, manifest: false }],
        '@nuxtjs/markdownit'
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    /* add environment variables */
    env: {
        userId: process.env.USER_ID
    },

    server: {
        port: process.env.PORT || 3001
    }
}
