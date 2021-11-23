const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',

    entry: './src/js/app.js',

    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.min.js',
        sourceMapFilename: '../js/sourcemaps/[file].map',
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js'),
                    path.resolve(__dirname, 'node_modules/@superstructure.net'),
                ],
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                    keep_fnames: true,
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    },

    devtool: 'source-map',
};
