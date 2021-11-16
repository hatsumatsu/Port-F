module.exports = (ctx) => ({
    parser: require('postcss-scss'),

    plugins: [
        require('postcss-import')(),
        require('postcss-custom-media')(),
        require('postcss-mixins')(),
        require('postcss-nested')(),
        require('postcss-color-function')(),
        require('autoprefixer')(),
        require('postcss-inline-svg')(),
        ctx.env === 'production' ? require('cssnano')() : null,
    ],

    map: {
        inline: false,
        annotation: `sourcemaps/${ctx.file.basename.replace(ctx.file.extname, '')}${
            ctx.env === 'production' ? '.min' : ''
        }${ctx.file.extname}.map`,
    },
});
