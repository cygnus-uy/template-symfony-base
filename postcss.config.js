const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
    plugins: [
        require('autoprefixer'),
        require('tailwindcss'),
        purgecss({
            content: ['./**/*.html', './templates/**/*.html.twig'],
            safelist: ['is-initialized', 'is-rendered']
        })
    ]
}
