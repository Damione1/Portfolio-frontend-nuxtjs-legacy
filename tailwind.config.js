import tailwindTypography from '@tailwindcss/typography';
module.exports = {
    media: false, // or 'media' or 'class'
    theme: {
        extend: {
            typography: (theme) => ({
                // all your dark themes styling for each HTML tag will be defined here
                dark: {
                    css: {
                        "h1": {
                            color: theme("colors.gray.300"),
                        },
                        "h2": {
                            color: theme("colors.gray.300"),
                        },
                        "h3": {
                            color: theme("colors.gray.300"),
                        },
                        "pre": {
                            color: theme("colors.gray.400"),
                            backgroundColor: theme("colors.gray.900")
                        },
                        color: theme("colors.gray.200"),
                        "figcaption": {
                            color: theme("colors.gray.200"),
                        },
                        "strong": {
                            color: theme("colors.gray.200"),
                        },
                        "a": {
                            color: theme("colors.gray.200"),
                        },
                        "p": {
                            color: theme("colors.gray.200"),
                        },

                        // define your other configuration here
                    },
                },
                // default styling goes here
                DEFAULT: {
                    css: {
                        "h2": {
                            "color": theme("colors.gray.800"),
                            "margin-bottom": 0,
                            "font-size": "24px",
                            "font-weight": 600,
                        },
                        "figure": {
                            "margin-bottom": 0,
                        },

                        // define your other configuration here
                    }
                }
            })
        }
    },
    plugins: [tailwindTypography],
}