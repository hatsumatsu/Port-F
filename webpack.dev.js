const path = require('path');

module.exports = {
    mode: 'development',

    entry: './src/js/app.js',

    output: {
        path: path.resolve(__dirname, 'js'),
        filename: 'app.js',
        sourceMapFilename: '../js/sourcemaps/[file].map',
    },

    devtool: 'eval',
};
