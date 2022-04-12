module.exports = {
    style: {
        css: {
            postcss: {
                plugins: [
                    require('tailwindcss'),
                    require('autoprefixer'),
            ],
        },
    },
},
};