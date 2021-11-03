const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js',
        pathinfo: false, // improves performance
    },

    // improves performance
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
    },

    devtool: 'eval', // improves performance
});
