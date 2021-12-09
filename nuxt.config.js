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
                    logout: false
                }
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
        '@nuxtjs/tailwindcss',
        '@nuxtjs/eslint-module'
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/proxy',
        '@nuxtjs/auth-next',
    ],

    proxy: {
        '/api': process.env.API_URL,
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    server: {
        port: 3001
    }
}