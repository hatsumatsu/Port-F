const path = require('path');

module.exports = {
    entry: './src/js/app.js',

    output: {
        sourceMapFilename: '../js/sourcemaps/[file].map',
    },
};
