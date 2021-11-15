const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',

    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.min.js',
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
                    options: {
                        presets: ['@babel/preset-env'],
                    },
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
});
