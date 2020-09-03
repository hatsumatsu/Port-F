const path = require('path');

module.exports = {
    entry: './src/js/app.js',

    output: {
        sourceMapFilename: '../js/sourcemaps/[file].map',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'node_modules/@superstructure.net')],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
