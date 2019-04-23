const path = require( 'path' );

module.exports = {
    entry: './src/js/app.js',

    output: {
        sourceMapFilename: '../src/js/sourcemaps/[file].map'
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
