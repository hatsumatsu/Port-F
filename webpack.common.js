const path = require( 'path' );

module.exports = {
    entry: './js/src/app.js',

    output: {
        sourceMapFilename: 'sourcemaps/[file].map'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },

    externals: {
        jquery: 'jQuery'
    },

    plugins: []
};
